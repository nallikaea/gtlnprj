package simulations

import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class LoadTest3 extends Simulation {

  // 1 Http Conf
  val httpConf: HttpProtocolBuilder = http.baseUrl("http://automationpractice.com")
    .header("Accept", "application/json")
  val scn: ScenarioBuilder = scenario("Ramp Users Load Simulation")
    .exec(getHomepage())
    .pause(5)
    .exec(getHomepage())
    .pause(5)
    .exec(getHomepage())

  def getHomepage(): ChainBuilder = {
    exec(
      http("Get Homepage")
        .get("/")
        .check(status.is(200))
    )
  }

  setUp(
    scn.inject(
      nothingFor(5 seconds),
      constantUsersPerSec(10) during (10 seconds),
      rampUsersPerSec(1) to (5) during (20 seconds)
    ).protocols(httpConf)
  )
}
