import React from 'react'
import './Kids.css'
import kids from './kids.jpg'
import kids2 from './kids2.jpg'
import kids3 from './kids3.jpg'
import { data } from "./kidscarouseldata";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const Kids = () => {
  return (
    <div className="container">
      <div className='kids'>
        <div className="kids_title">
          <h1 className='h1_kids_title'>SPORTSWEAR KIDS</h1>
        </div>
        <div className="three_div_img">
          <div className="img_div">
            <img className='img_kis1_2' src={kids3} alt="" />
            <h1 className='kids_sport1'>Kids sportswear</h1>
          </div>
          <div className="img_div">
            <img className='img_kis1_2' src={kids} alt="" />
            <h1 className='kids_sport2'>Kids training suits</h1>
          </div>
          <div className="img_div">
            <img className='img_kis1_2' src={kids2} alt="" />
            <h1 className='kids_sport3'>Kids jerseys</h1>
          </div>
        </div>
        <div className="carousel_img_around">
          <div className='kids_carousel_text'>
            <h1>HightLights</h1>
          </div>
          <Carousel
            withIndicators
            height={590}
            slideSize={{ base: '190%', sm: '50%', md: '20.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            controlSize={50}
            aria-controls='flex'
            align="start"
            mt={20}
            ml={20}
          >
            {data.map((item) => (
              <Carousel.Slide key={item.id}>
                <div className="boxes">
                  <div>
                    <img className="map_img" src={item.image} alt="" />
                  </div>
                  <hr />
                  <div className="box_texts">
                    <h4>{item.title}</h4>
                    <div className="docks">
                      {item.cost1 && item.discount ? (
                        <span className="price">{item.cost1}</span>
                      ) : (
                        ""
                      )}
                      <h2 className="text-centers">{item.costDel2}</h2>
                      {item.discount && item.cost1 ? (
                        <p className="text_diskpunt">{item.discount}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel >
        </div>
        <div className="three_div_imga">
          <div className="img_div">
            <img className='img_kis1_2' src={kids3} alt="" />
            <h1 className='kids_sport4'>Kids training jackets</h1>
          </div>
          <div className="img_div">
            <img className='img_kis1_2' src={kids} alt="" />
            <h1 className='kids_sport5'>Kids t-shirts</h1>
          </div>
          <div className="img_div">
            <img className='img_kis1_2' src={kids2} alt="" />
            <h1 className='kids_sport6'>Kids shorts</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kids