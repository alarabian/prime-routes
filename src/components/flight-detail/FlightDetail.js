import React from 'react'
import FlightIntro from './flight-intro/FlightIntro'
import FlightFigure from './flight-figure/FlightFigure'
import FlightInfo from './flight-info/FlightInfo'
import FlightAmenties from './flight-amenties/FlightAmenties'
import FlightDetailAside from './flight-detail-aside/FlightDetailAside'
import ProviderDetails from '../hotel-detail/hotel-detail-aside/provider-details/ProviderDetails'

const FlightDetail = () => {
  return (
    <>
      <section className='flightDetail sectionSpace'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <FlightIntro />
              <FlightFigure />
              <FlightInfo />
              <FlightAmenties />
            </div>
            <div className="col-lg-4 col-md-4">
              <FlightDetailAside />
              <ProviderDetails />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default FlightDetail