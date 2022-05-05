var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "percentiles1": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "percentiles2": {
        "total": "841",
        "ok": "841",
        "ko": "-"
    },
    "percentiles3": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles4": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
},
contents: {
"req_get-homepage-660e8": {
        type: "REQUEST",
        name: "Get Homepage",
path: "Get Homepage",
pathFormatted: "req_get-homepage-660e8",
stats: {
    "name": "Get Homepage",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "percentiles2": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "percentiles3": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "percentiles4": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_get-homepage-re-d4806": {
        type: "REQUEST",
        name: "Get Homepage Redirect 1",
path: "Get Homepage Redirect 1",
pathFormatted: "req_get-homepage-re-d4806",
stats: {
    "name": "Get Homepage Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles2": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles3": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles4": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
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
