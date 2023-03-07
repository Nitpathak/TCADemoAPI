var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3343",
        "ok": "3343",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9492",
        "ok": "9492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7658",
        "ok": "7658",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1212",
        "ok": "1212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7903",
        "ok": "7903",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8345",
        "ok": "8345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9198",
        "ok": "9198",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9390",
        "ok": "9390",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.471",
        "ok": "1.471",
        "ko": "-"
    }
},
contents: {
"req_get--xtk-pen-ra-c57fc": {
        type: "REQUEST",
        name: "GET /xtk/pen/rates?dealer_id=3PA69203&vin=3TMAZ5CNXMM154510&odometer=3&deal_type=finance_deal&is_new=true&payment_type=Lease&is_cpo=false&finance_term=60&finance_amount=41340.44&vehicle_price=37448&msrp=35215&transaction_date=2021-05-28",
path: "GET /xtk/pen/rates?dealer_id=3PA69203&vin=3TMAZ5CNXMM154510&odometer=3&deal_type=finance_deal&is_new=true&payment_type=Lease&is_cpo=false&finance_term=60&finance_amount=41340.44&vehicle_price=37448&msrp=35215&transaction_date=2021-05-28",
pathFormatted: "req_get--xtk-pen-ra-c57fc",
stats: {
    "name": "GET /xtk/pen/rates?dealer_id=3PA69203&vin=3TMAZ5CNXMM154510&odometer=3&deal_type=finance_deal&is_new=true&payment_type=Lease&is_cpo=false&finance_term=60&finance_amount=41340.44&vehicle_price=37448&msrp=35215&transaction_date=2021-05-28",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3343",
        "ok": "3343",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9492",
        "ok": "9492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7658",
        "ok": "7658",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1212",
        "ok": "1212",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7903",
        "ok": "7903",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8345",
        "ok": "8345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9198",
        "ok": "9198",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9390",
        "ok": "9390",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.471",
        "ok": "1.471",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
