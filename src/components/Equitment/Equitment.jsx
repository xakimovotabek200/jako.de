import React from 'react'
import './Equitment.css'
import { equitment } from "../Kids/kidscarouseldata";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const Equitment = () => {
  return (
    <div className='container'>
      <div className="equitment">
        <div className="eqiutment_heading">
          <h1 className="heading_text">SPORT-EQUIPMENT</h1>
          <div className="image_divs">
            <div className="imgas_equitment">
              <img className='img_eqit' src="https://cdn.jako.de/userdata/images/Einkaufswelten/Equipment/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Sporttasche.jpg" alt="" />
              <h3 className='equitment_bags'>Bags</h3>
            </div>
            <div className="imgas_equitment">
              <img className='img_eqit' src="https://cdn.jako.de/userdata/images/Einkaufswelten/Equipment/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Fu%C3%9Fb%C3%A4lle.jpg" alt="" />
              <h3 className='equitment_bags'>Balls</h3>
            </div>
          </div>
        </div>
        <div className="carousel_img_around">
          <div className='kids_carousel_text'>
            <h1>OUR EQUIPMENT TOP SELLERS</h1>
          </div>
          <Carousel
            withIndicators
            height={590}
            slideSize={{ base: '0%', sm: '0%', md: '20.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            loop
            // controlSize={0}
            aria-controls='flex'
            align="start"
            mt={40}
            ml={20}
          >
            {equitment.map((item) => (
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
        <div className="eqiutment_headings">
          <div className="image_divs">
            <div className="imgas_equitment">
              <img className='img_eqit' src="https://cdn.jako.de/userdata/images/Einkaufswelten/Equipment/Fu%C3%9Fball_Zubeh%C3%B6r_Stutzen_900x674px.jpg" alt="" />
              <h3 className='equitment_bag'>Shin guards</h3>
            </div>
            <div className="imgas_equitment">
              <img className='img_eqit' src="https://cdn.jako.de/userdata/images/Einkaufswelten/Equipment/JAKO_2023_Bildzuschnitte_Homepage_900x674px_Torwarthandschuhe.jpg" alt="" />
              <h3 className='equitment_bagd'>Goalkeeper gloves</h3>
            </div>
          </div>
        </div>
        <div className="equitmen_text_form">
          <div className="text_form_s">
            <p className='opensans'>In addition to enjoying the game and, of course, some talent, a successful football team also needs the right equipment, both on the pitch and in the dressing room or training camps. At JAKO you will find football accessories that meet your high demands for quality and functionality.</p>
            <h4 className='football'>Football accessories - more than the right outfit</h4>
            <p className='opensans'>Sure: a football player needs a jersey, shorts and football boots. But the right equipment for the game doesn't stop there: shin guards protect your shins and Achilles tendon in duels with opponents. As a goalkeeper, you need gloves that are tough and fit perfectly. And best of all, you have a spacious sports bag with well thought-out compartments that offer enough space for your football accessories. Sports bags, water bottles and backpacks round off the JAKO range - all of which can be customised with player names and club logos.</p>
            <h4 className="football">Your football accessories for training</h4>
            <p className='opensans'>If you're coaching a football team, then you'll also need plenty of football training accessories to keep your team committed and well-equipped for success. Because a team can only offer the best performance on the pitch if it is well prepared! At JAKO, you will find a wide range of football accessories for every football team.</p>
            <h4 className="football">Football accessories for theory</h4>
            <p className='opensans'>Show your boys or girls how they should act on the field and develop game strategies with them - in training, this is best done on a tactics board, in the game you use the practical coach's folder with magnetic football field and notepad: here you can quickly and clearly show your team the right direction.</p>
            <h4 className="football">Football accessories for training</h4>
            <p className="opensans">On the pitch, it becomes clear how important good football accessories are for training: shirts in different colours divide your team visually into several groups during training - the high-quality materials ensure that the shirts are long-lasting. Training equipment such as cones, hurdles, coordination ladders or marking hoops and discs are also part of the necessary football accessories that every club, whether amateur or professional, should have. At JAKO, the football equipment is - as you would expect from us - well thought-out, high quality and often customisable to your club: this makes playing football, whether as a hobby athlete or professional, really fun!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equitment