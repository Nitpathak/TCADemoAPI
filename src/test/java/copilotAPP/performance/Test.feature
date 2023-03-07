Feature: Test performance of PEN Rates APIs
Scenario: Get the response of PEN Rates APIs for TSD Store
    Given url 'http://localhost:4000/xtk/pen/rates?dealer_id=3PA69203&vin=3TMAZ5CNXMM154510&odometer=3&deal_type=finance_deal&is_new=true&payment_type=Lease&is_cpo=false&finance_term=60&finance_amount=41340.44&vehicle_price=37448&msrp=35215&transaction_date=2021-05-28'
    Given header Authorization = 'Bearer ' + token
    When method Get
    Then status 200