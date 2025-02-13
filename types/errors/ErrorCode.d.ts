// TODO there seems to be a lot of duplicate codes listed here https://www.easypost.com/errors-guide
export declare type TErrorCode =
  | 'INTERNAL_SERVER_ERROR'
  | 'NOT_ACCEPTABLE'
  | 'NOT_FOUND'
  | 'FORBIDDEN'
  | 'PAYMENT_REQUIRED'
  | 'UNAUTHORIZED'
  | 'BAD_REQUEST'
  | 'PAYMENT_GATEWAY.ERROR'
  | 'MODE.UNAUTHORIZED'
  | 'MODE.CONFLICT'
  | 'DATE.PARSE.FAILURE'
  | 'PARAMETER.FORBIDDEN'
  | 'PARAMETER.REQUIRED'
  | 'ADDRESS.PARAMETERS.INVALID_CHARACTER'
  | 'ADDRESS.PARAMETERS.INVALID'
  | 'ADDRESS.COUNTRY.INVALID'
  | 'ADDRESS.VERIFICATION.NOT_FOUND'
  | 'ADDRESS.VERIFICATION.FAILURE'
  | 'ADDRESS.VERIFY.UNAVAILABLE'
  | 'ADDRESS.VERIFICATION.INVALID'
  | 'ADDRESS.VERIFICATION.NOT_FOUND'
  | 'ADDRESS.VERIFY.FAILURE'
  | 'ADDRESS.VERIFY.CARRIER_INVALID'
  | 'ADDRESS.VERIFY.UPSTREAM_UNAVAILABLE'
  | 'ADDRESS.VERIFY.ONLY_US'
  | 'ADDRESS.VERIFY.INTL_NOT_ENABLED'
  | 'ADDRESS.VERIFY.MISSING_STREET'
  | 'ADDRESS.VERIFY.MISSING_CITY_STATE_ZIP'

  /**
   * The typo "FORAMT" is in both the docs and api error response.
   * @link https://github.com/EasyPost/easypost-node/pull/156#discussion_r819811282
   */
  | 'BATCH.FILE_FORAMT.INVALID'
  | 'BATCH.SHIPMENT.TOO_LARGE'
  | 'BATCH.SHIPMENT.MISSING'
  | 'BATCH.SHIPMENTS.REQUIRED'
  | 'BATCH.STATE.CREATING'
  | 'BATCH.STATE.CREATION_FAILED'
  | 'BATCH.STATE.ALREADY_PURCHASED'
  | 'BATCH.STATE.NOT_PURCHASED'
  | 'BATCH.PARAMS.INVALID'
  | 'BANK_ACCOUNT.CHARGE.FAILURE'
  | 'BANK_ACCOUNT.VERIFY.FAILURE'
  | 'CARRIER_ACCOUNT.REGISTRATION.FAILED'
  | 'CARRIER_ACCOUNT.PARAMETERS.INVALID'
  | 'CARRIER_ACCOUNT.INVALID'
  | 'CARRIER_ACCOUNT.TYPE.EXISTS'
  | 'CARRIER_ACCOUNT.TYPE.UNKNOWN'
  | 'CREDIT_CARD.CHARGE.FAILURE'
  | 'CREDIT_CARD.INVALID'
  | 'CONTAINER.TYPE.INVALID'
  | 'CONTAINER.DIMENSION.REQUIRED'
  | 'CONTAINER.NAME.REQUIRED'
  | 'CUSTOMS_INFO.PARAMETERS.INVALID'
  | 'CUSTOMS_ITEM.ORIGIN_COUNTRY.REQUIRED'
  | 'CUSTOMS_ITEM.CURRENCY.ONE_CURRENCY_SUPPORTED'
  | 'CUSTOMS_ITEM.PARAMETERS.INVALID'
  | 'DOCUMENT.COMMERCIAL_INVOICE.FAILURE'
  | 'DOCUMENT.CONVERSION.FAILURE'
  | 'EMAIL_VERIFICATION.USED'
  | 'EMAIL_VERIFICATION.NOT_FOUND'
  | 'EMAIL_VERIFICATION.EXPIRED'
  | 'IMAGE.CONVERSION.FAILURE'
  | 'IMAGE.WIDTH.INVALID'
  | 'INSURANCE.PARAMETERS.INVALID'
  | 'INSURANCE.CREATE.FAILURE'
  | 'INSURANCE.PURCHASE.NOT_ALLOWED'
  | 'INSURANCE.PURCHASE.FAILED'
  | 'INSURANCE.AMOUNT.BELOW_MINIMUM'
  | 'INSURANCE.AMOUNT.REQUIRED'
  | 'INSURANCE.AMOUNT.ABOVE_MAXIMUM'
  | 'ITEM.WEIGHT.REQUIRED'
  | 'ITEM.HEIGHT.REQUIRED'
  | 'ITEM.WIDTH.REQUIRED'
  | 'ITEM.LENGTH.REQUIRED'
  | 'ITEM.VALUE.REQUIRED'
  | 'ITEM.NAME.REQUIRED'
  | 'ORDER.SHIPMENTS.REQUIRED'
  | 'ORDER.FROM_ADDRESS.REQUIRED'
  | 'ORDER.TO_ADDRESS.REQUIRED'
  | 'ORDER.OPTIONS.INVALID'
  | 'ORDER.PARAMS.REQUIRED'
  | 'ORDER.INVALID'
  | 'ORDER.RATE.UNAVAILABLE'
  | 'ORDER.SERVICE.REQUIRED'
  | 'ORDER.CARRIER.REQUIRED'
  | 'ORDER.LABEL_DATE.INVALID'
  | 'ORDER.CARRIER_ACCOUNTS.CONFLICT'
  | 'PARCEL.PREDEFINED_PACKAGE.INVALID'
  | 'PARCEL.PARAMETERS.INVALID'
  | 'PICKUP.MIN_DATETIME.REQUIRED'
  | 'PICKUP.MAX_DATETIME.REQUIRED'
  | 'PICKUP.IS_ACCOUNT_ADDRESS.REQUIRED'
  | 'PICKUP.ADDRESS.INVALID'
  | 'PICKUP.ADDRESS.REQUIRED'
  | 'PICKUP.REQUEST.INVALID'
  | 'PICKUP.BATCH.INVALID'
  | 'PICKUP.BATCH.REQUIRED'
  | 'PICKUP.SHIPMENT_SERVICE.INVALID'
  | 'PICKUP.BATCH_CARRIER.INCONSISTENT'
  | 'PICKUP.STATUS.INVALID'
  | 'PICKUP.BUY.FAILED'
  | 'PICKUP.BUY.NO_MATCHING_RATES'
  | 'PICKUP.SERVICE.REQUIRED'
  | 'PICKUP.CARRIER.REQUIRED'
  | 'PICKUP.SHIPMENT_COUNTRY.INVALID'
  | 'PICKUP.BUY.FORBIDDEN'
  | 'PICKUP.CANCEL.FAILED'
  | 'REFUND.NO_RESPONSE'
  | 'REFUND.FAILURE'
  | 'REFUND.TRACKING_CODES.INVALID'
  | 'REFUND.TRACKING_CODE.NOT_FOUND'
  | 'SCAN_FORM.FAILURE'
  | 'SCAN_FORM.BATCH.MULTIPLE_CARRIERS'
  | 'SCAN_FORM.BATCH.NOT_PURCHASED'
  | 'SCAN_FORM.SHIPMENTS.INVALID'
  | 'SCAN_FORM.SHIPMENTS.REQUIRED'
  | 'SCAN_FORM.CREATE.CARRIER_NOT_SUPPORTED'
  | 'SCAN_FORM.CREATE.FAILURE'
  | 'SHIPMENT.PURCHASE.FAILURE'
  | 'SHIPMENT.OPTIONS.INVALID'
  | 'SHIPMENT.INVALID_PARAMS'
  | 'SHIPMENT.INVALID'
  | 'SHIPMENT.POSTAGE.INVALID_FORMAT'
  | 'SHIPMENT.POSTAGE.FORMAT_UNAVAILABLE'
  | 'SHIPMENT.POSTAGE.REQUIRED'
  | 'SHIPMENT.POSTAGE.EXISTS'
  | 'SHIPMENT.POSTAGE.NO_RESPONSE'
  | 'SHIPMENT.POSTAGE.FAILURE'
  | 'SHIPMENT.REFUND.UNAVAILABLE'
  | 'SHIPMENT.REFUND.FAILURE'
  | 'SHIPMENT.CUSTOMS_INFO.DESCRIPTION_REQUIRED'
  | 'SHIPMENT.CUSTOMS_INFO.REQUIRED'
  | 'SHIPMENT.RATE.CARRIER_ACCOUNT_INVALID'
  | 'SHIPMENT.CARRIER_ACCOUNTS.CONFLICT'
  | 'SHIPMENT.TRACKING_CODE.INVALID_CARRIER'
  | 'SHIPMENT.INSURANCE.ALREADY_PURCHASED'
  | 'SHIPMENT.MISSING_RATE'
  | 'SHIPMENT.MISSING_INFORMATION'
  | 'SHIPMENT.PURCHASE.IN_PROGRESS'
  | 'SHIPMENT.RATES.UNAVAILABLE'
  | 'SHIPMENT.RATE.STAMP_UNAVAILABLE'
  | 'SHIPMENT.RATE.BARCODE_UNAVAILABLE'
  | 'SHIPMENT.POSTAGE.ASCII'
  | 'SHIPMENT_REPORT.DATE_RANGE.INVALID'
  | 'SHIPMENT_REPORT.ALREADY_IN_PROGRESS'
  | 'SHIPMENT_REPORT.DATE_RANGE.TOO_LONG'
  | 'TRACKER.RETRIEVE.ERROR'
  | 'TRACKER.RUN.ERROR'
  | 'TRACKER.CREATE.ERROR'
  | 'TRACKER.NOT_FOUND'
  | 'TRACKER.INVALID_TEST_CODE'
  | 'TRACKER.NO_CARRIER_ACCOUNT'
  | 'TRACKER.INVALID_PARAMS'
  | 'TRACKER.UNSUPPORTED_CARRIER'
  | 'TRACKER.CARRIER_CODE_MISMATCH'
  | 'TRACKER.MULTIPLE_CARRIERS_FOR_CODE'
  | 'TRACKER.NO_CARRIER_FOR_CODE'
  | 'USER.UNAUTHORIZED'
  | 'USER.INVALID'
  | 'USER.PARENT.INVALID'
  | 'USER.CHARGE.NOT_ALLOWED'
  | 'WEBHOOK.EVENT.INVALID'
  | 'WEBHOOK.INVALID'
  | 'DHLGM.RATE_TABLE.NOT_FOUND'
  | 'DHLGM.SCAN_FORM.GENERATION_FAILED'
  | 'DHLGM.RETURN.AUTHORIZATION_NUMBER_REQUIRED'
  | 'DHLGM.LABEL.FAILURE'
  | 'DHLGM.NO_INTERNATIONAL'
  | 'DHLGM.NO_ALCOHOL'
  | 'DHLGM.GIRTH_MAX'
  | 'DHLGM.LETTER_NOT_SUPPORTED'
  | 'DHLGM.ACCESS_TOKEN.GENERATION_FAILED';
