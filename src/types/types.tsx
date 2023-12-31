const responseStatusDocumentExample = {
    "success": true,
    "data": [{
  "PossibilityCreateReturn" : true,
  "PossibilityCreateRefusal" : true,
  "PossibilityChangeEW" : true,
  "PossibilityCreateRedirecting" : true,
  "Number" : "20400048799000",
  "Redelivery" : "0",
  "RedeliverySum" : "0",
  "RedeliveryNum" : "",
  "RedeliveryPayer" : "Sender/Recipient",
  "OwnerDocumentType" : "",
  "LastCreatedOnTheBasisDocumentType" : "",
  "LastCreatedOnTheBasisPayerType" : "",
  "LastCreatedOnTheBasisDateTime" : "",
  "LastTransactionStatusGM" : "",
  "LastTransactionDateTimeGM" : "",
  "LastAmountTransferGM" : "",
  "DateCreated" : "18-11-2021 11:52:42",
  "DocumentWeight" : "3",
  "FactualWeight" : "3",
  "VolumeWeight" : "0.1",
  "CheckWeight" : "",
  "CheckWeightMethod" : "",
  "DocumentCost" : "51",
  "CalculatedWeight" : "3",
  "SumBeforeCheckWeight" : "",
  "PayerType" : "Sender",
  "RecipientFullName" : "ПІБ",
  "RecipientDateTime" : "21.11.2021 13:53:47",
  "ScheduledDeliveryDate" : "19.11.2021 13:53:47",
  "PaymentMethod" : "Cash",
  "CargoDescriptionString" : "Одяг",
  "CargoType" : "Cargo",
  "CitySender" : "Київ",
  "CityRecipient" : "Київ",
  "WarehouseRecipient" : "Відділення №101 (до 15 кг), Міні-відділення: вул. Велика Васильківська, 143/2, (маг. 'fora')",
  "CounterpartyType" : "PrivatePerson",
  "AfterpaymentOnGoodsCost" : "0",
  "ServiceType" : "WarehouseWarehouse",
  "UndeliveryReasonsSubtypeDescription" : "",
  "WarehouseRecipientNumber" : "101",
  "LastCreatedOnTheBasisNumber" : "",
  "PhoneRecipient" : "380600000000",
  "RecipientFullNameEW" : "",
  "WarehouseRecipientInternetAddressRef" : "00000000-0000-0000-0000-000000000000",
  "MarketplacePartnerToken" : "",
  "ClientBarcode" : "",
  "RecipientAddress" : "м. Київ, Відділення №101 (до 15 кг), Міні-відділення, вул. Велика Васильківська, 143/2",
  "CounterpartyRecipientDescription" : "Приватна особа",
  "CounterpartySenderType" : "PrivatePerson",
  "DateScan" : "0001-01-01 00:00:00",
  "PaymentStatus" : "",
  "PaymentStatusDate" : "",
  "AmountToPay" : "",
  "AmountPaid" : "",
  "Status" : "",
  "StatusCode" : "",
  "RefEW" : "00000000-0000-0000-0000-000000000000",
  "BackwardDeliverySubTypesActions" : "",
  "BackwardDeliverySubTypesServices" : "",
  "UndeliveryReasons" : "",
  "DatePayedKeeping" : "",
  "InternationalDeliveryType" : "",
  "SeatsAmount" : "1",
  "CardMaskedNumber" : "",
  "ExpressWaybillPaymentStatus" : "PaymentNotAvailable",
  "ExpressWaybillAmountToPay" : "",
  "PhoneSender" : "",
  "TrackingUpdateDate" : "2022-06-07 13:42:56",
  "WarehouseSender" : "Отделение №178 (до 30 кг): просп. Оболонский, 35",
  "DateReturnCargo" : "",
  "DateMoving" : "",
  "DateFirstDayStorage" : "",
  "RefCityRecipient" : "00000000-0000-0000-0000-000000000000",
  "RefCitySender" : "00000000-0000-0000-0000-000000000000",
  "RefSettlementRecipient" : "00000000-0000-0000-0000-000000000000",
  "RefSettlementSender" : "00000000-0000-0000-0000-000000000000",
  "SenderAddress" : "м. Київ, Відділення №178 (до 30 кг): просп. Оболонський, 35",
  "SenderFullNameEW" : "Іванов Петро Миколайович",
  "AnnouncedPrice" : "50000",
  "AdditionalInformationEW" : "",
  "ActualDeliveryDate" : "",
  "PostomatV3CellReservationNumber" : "00000000-0000-0000-0000-000000000000",
  "OwnerDocumentNumber" : "",
  "LastAmountReceivedCommissionGM" : "",
  "DeliveryTimeframe" : "",
  "CreatedOnTheBasis" : "",
  "UndeliveryReasonsDate" : "",
  "RecipientWarehouseTypeRef" : "00000000-0000-0000-0000-000000000000",
  "WarehouseRecipientRef" : "00000000-0000-0000-0000-000000000000",
  "CategoryOfWarehouse" : "Branch",
  "WarehouseRecipientAddress" : "Киев, Героев Днепра, 53",
  "WarehouseSenderInternetAddressRef" : "00000000-0000-0000-0000-000000000000",
  "WarehouseSenderAddress" : "Киев, Оболонский, 35",
  "AviaDelivery" : "",
  "BarcodeRedBox" : "",
  "CargoReturnRefusal" : "false",
  "DaysStorageCargo" : "",
  "Packaging" : null,
  "PartialReturnGoods" : null,
  "SecurePayment" : "false",
  "PossibilityChangeCash2Card" : true,
  "PossibilityChangeDeliveryIntervals" : true,
  "PossibilityTermExtensio" : true,
  "StorageAmount" : "",
  "StoragePrice" : "",
  "FreeShipping" : "",
  "LoyaltyCardRecipient" : ""
    }],
    "errors": [],
    "warnings": [],
    "info": [],
    "messageCodes": [],
    "errorCodes": [],
    "warningCodes": [],
    "infoCodes": []
  };

  export type StatusDocumentResponseType = typeof responseStatusDocumentExample;


  export interface WarehousesType {
    BeaconCode: string;
    BicycleParking: string;
    CanGetMoneyTransfer: string;
    CategoryOfWarehouse: string;
    CityDescription: string;
    CityDescriptionRu: string;
    CityRef: string;
    DenyToSelect: string;
    Description: string;
    DescriptionRu: string;
    Direct: string;
    DistrictCode: string;
    GeneratorEnabled: string;
    HasFittingRoom: string;
    HasMirror: string;
    InternationalShipping: string;
    Latitude: string;
    Longitude: string;
    MaxDeclaredCost: string;
    Number: string;
    OnlyReceivingParcel: string;
    POSTerminal: string;
    PaymentAccess: string;
    Phone: string;
    PlaceMaxWeightAllowed: string;
    PostFinance: string;
    PostMachineType: string;
    PostalCodeUA: string;
    ReceivingLimitationsOnDimensions: {
      Width: number;
      Height: number;
      Length: number;
    };
    Reception: Record<string, string>;
    Ref: string;
    RegionCity: string;
    Schedule: Record<string, string>;
    SelfServiceWorkplacesCount: string;
    SendingLimitationsOnDimensions: {
      Width: number;
      Height: number;
      Length: number;
    };
    SettlementAreaDescription: string;
    SettlementDescription: string;
    SettlementRef: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    SiteKey: string;
    TotalMaxWeightAllowed: string;
    TypeOfWarehouse: string;
    WarehouseForAgent: string;
    WarehouseIllusha: string;
    WarehouseIndex: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    WorkInMobileAwis: string;
  }  

