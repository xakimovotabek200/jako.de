import React from 'react'
import './Women.css'
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import kids from './kids.jpg'
import kids2 from './kids2.jpg'
import kids3 from './kids3.jpg'
import { women_data } from './Women_data'

const Women = () => {
  return (
    <div className="container">
      <div className='women'>
        <div className="women_title">
          <h1 className='h1_women_title'>WOMEN</h1>
        </div>
        <div className="three_div_womens">
          <div className="img_div_women">
            <img className='women_kis1_2' src={kids3} alt="" />
            <h1 className='women_sport1'>Women sportswear</h1>
          </div>
          <div className="img_div">
            <img className='women_kis1_2' src={kids} alt="" />
            <h1 className='women_sport1'>Women training suits</h1>
          </div>
          <div className="img_div">
            <img className='women_kis1_2' src={kids2} alt="" />
            <h1 className='women_sport1'>Women jerseys</h1>
          </div>
        </div>
        <div className="carousel_img_around">
          <div className='kids_carousel_text'>
            <h1>OUR BESTSELLERS FOR WOMEN</h1>
          </div>
          <Carousel
            withIndicators
            height={590}
            slideSize={{ base: '200%', sm: '50%', md: '20.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            controlSize={50}
            aria-controls='flex'
            align="start"
            mt={20}
            ml={20}
          >
            {women_data.map((item) => (
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
        <div className="three_div_women">
          <div className="img_div_women">
            <img className='women_kis1_2' src={kids3} alt="" />
            <h1 className='women_sport1'>Women training jackets</h1>
          </div>
          <div className="img_div">
            <img className='women_kis1_2' src={kids} alt="" />
            <h1 className='women_sport1'>Women t-Shirts</h1>
          </div>
          <div className="img_div">
            <img className='women_kis1_2' src={kids2} alt="" />
            <h1 className='women_sport1'>Women shorts</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Women