import { API_KEY } from '../constants/api';
import { useSearchParams } from 'react-router-dom';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { WarehousesType } from '../types/types';
import '../styles/Warehouses.scss';
import { Loader } from '../components/UI/Loader/Loader';
import '../components/UI/Form/Form.scss';
import cl from 'classnames';
import '../components/UI/Loader/Loader.scss';
import debounce from 'lodash/debounce';

export const Warehouses = () => {
  const cities = [
    'Київ',
    'Харків',
    'Дніпро',
    'Одеса',
    'Львів',
    'Запоріжжя',
    'Кривий Ріг',
    'Миколаїв',
    'Вінниця',
    'Херсон',
    'Полтава',
    'Чернігів',
    'Черкаси',
    'Суми',
    'Житомир',
    'Рівне',
    'Тернопіль',
    'Івано-Франківськ',
    'Ужгород',
    'Луцьк',
    'Хмельницький',
    'Чернівці',
    'Кропивницький',
    'Біла Церква',
    'Хмельницький',
  ];
  const limit = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCity = searchParams.get('locality') || '';
  const handleSelectedCity = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    if (!e.target.value) {
      params.delete('locality');
    } else {
      params.set('locality', e.target.value);
    }

    setSearchParams(params);
  };

  const query = searchParams.get('query') || '';
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const updateDebouncedQuery = useCallback(debounce((value) => setDebouncedQuery(value), 1000), []);
  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (!e.target.value) {
      params.delete('query');
      updateDebouncedQuery('');
    } else {
      params.set('query', e.target.value);
      updateDebouncedQuery(e.target.value);
    }

    setSearchParams(params);
  };

  const [warehouses, setWarehouses] = useState<WarehousesType[]>([]);

  const [chosenPage, setChosenPage] = useState('1');
  const [pages, setPages] = useState<number[]>([]);

  const [fetchWarehouses, isLoadingWarehouses, isErrorWarehouses] = useFetching(
    async () => {
      const requestBody = {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: selectedCity,
          Language: 'UA',
        },
      };
      if (!!selectedCity) {
        const response = await PostService.getStatusDocuments(requestBody);
        setWarehouses(response.data);
      } else {
        setWarehouses([]);
      }
    }
  );

  useEffect(() => {
    fetchWarehouses();
  }, [selectedCity]);

  const filteredWarehouses = useMemo(() => {
    const filtered = warehouses?.filter((warehouse) =>
      warehouse.Description.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    const amount = Math.ceil(filtered.length / limit);
    const arrWithPages = [];
    for (let i = 1; i <= amount; i++) {
      arrWithPages.push(i);
    }
    setPages(arrWithPages);

    return filtered;
  }, [debouncedQuery, warehouses]);


  const startIndex = (parseInt(chosenPage) - 1) * limit;
  const endIndex = startIndex + limit;

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='filter-wrapper'
      >
        <select
          className='select'
          value={selectedCity}
          onChange={handleSelectedCity}
        >
          <option
            value=''
            disabled
          >
            Select a locality
          </option>
          {cities.map((city, index) => (
            <option
              key={`${city}_${index}`}
              value={city}
            >
              {city}
            </option>
          ))}
        </select>
        <input
          placeholder='Enter an adress'
          className='form__input'
          type='text'
          value={query}
          onChange={handleQuery}
        />
      </form>

      {isLoadingWarehouses && <Loader styles="loader-big" />}

      {!isErrorWarehouses && !isLoadingWarehouses && (
        <table className='table'>
          <thead className='table__head'>
            <tr className='table__row'>
              <th className='table__data'>DESCRIPTION</th>
              <th className='table__data'>PHONE</th>
              <th className='table__data'>STATUS</th>
            </tr>
          </thead>
          <tbody>

            {filteredWarehouses?.slice(startIndex, endIndex).map((warehouse, index) => (
              <tr
                key={warehouse.Description + index}
                className='table__row'
              >
                <td className='table__data'>{warehouse.Description}</td>
                <td className='table__data'>{warehouse.Phone}</td>
                <td className='table__data'>{warehouse.WarehouseStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className='pages-wrapper'>
        {pages.length > 1 && !isLoadingWarehouses && !isErrorWarehouses && pages.map((page, index) => (
          <div
            onClick={() => setChosenPage(String(page))}
            className={cl('page-item', {'page-item--active': chosenPage === String(page)})}
            key={`${page}__${index}`}
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
};
