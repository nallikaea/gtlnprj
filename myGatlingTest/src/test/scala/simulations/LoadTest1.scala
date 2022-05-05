package simulations

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt

class LoadTest1 extends Simulation {

  // 1 Http Conf
  val httpConf: HttpProtocolBuilder = http.baseUrl("http://automationpractice.com")
    .header("Accept", "application/json")


  // 2 Scenario Definition
  val scn: ScenarioBuilder = scenario("My First Test")

    .exec(http("Get Homepage")
      .get("/")
      .check(status.is(200)))
    .pause(5)

    .exec(http("Get Homepage - 2nd call")
      .get("/")
      .check(status.not(404), status.not(500)))
    .pause(3000.milliseconds)
  // 3 Load Scenario
  //	rampConcurrentUsers
  //	constantConcurrentUsers
  //	rampUsersPerSec
  //	rampUsers
  //	atOnceUsers
  setUp(
    scn.inject(atOnceUsers(5))
  ).protocols(httpConf)
}
