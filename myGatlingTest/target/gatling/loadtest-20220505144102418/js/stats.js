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
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1665",
        "ok": "1665",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1665",
        "ok": "1665",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1791",
        "ok": "1791",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1892",
        "ok": "1892",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1912",
        "ok": "1912",
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
    "count": 2,
    "percentage": 100
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
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1917",
        "ok": "1917",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1917",
        "ok": "1917",
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
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
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1413",
        "ok": "1413",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1413",
        "ok": "1413",
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
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
