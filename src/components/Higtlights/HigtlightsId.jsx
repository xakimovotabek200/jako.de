import { HoverCard, Modal, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from '@mantine/carousel'; import { Pagination } from '@mantine/core';
import { productData } from './data';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function HightLightsId() {
    const [opened, { open, close }] = useDisclosure(false);
    const { id } = useParams();
    const highlight = productData.find(item => item.id === parseInt(id));
    const [selectedImageIndex, setSelectedImageIndex] = useState(highlight.image);


    if (!highlight) {
        return <div className="">data not found</div>;
    }


    return (
        <div className='container mx-auto w-[95%] md:flex justify-around'>
            <div className='right_side'>
                <HoverCard shadow="md" closeDelay={200}>
                    <Modal size="calc(100vw - 3rem)" opened={opened} onClose={close}>
                        <HoverCard.Target>
                            <img style={{ width: "80%", objectFit: "contain ", height: "500px" }} src={selectedImageIndex} alt="" />
                        </HoverCard.Target>
                    </Modal>
                    <img
                        className='w-[500px] object-contain h-[500px]'
                        src={selectedImageIndex}
                        onClick={open}
                        title='Open modal'
                        style={{ cursor: "pointer" }}
                    />
                    <HoverCard.Dropdown>
                        <Text size="sm">{highlight.name}</Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </div>
            <div className='left_side'>
                <div>
                    <div className='mb-[30px]'>
                        <h1 className='text-[#5b5b5b] text-2xl font-extrabold'>
                            {highlight.name2}
                        </h1>
                    </div>
                    <div className='w-[500px] h-[58px] bg-[#c9eeff] flex justify-center items-center text-[#5b5b5b] mb-[50px]'>
                        <p className='font-medium'>Want 30% off your next order?</p>
                        <Link to={"/"} className='text-[#008ac9] underline font-medium pl-4'>Become a member now</Link>
                    </div>
                    <div className='flex'>
                        <Carousel
                            height={180}
                            nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                            previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
                        >
                            {highlight.photos.map((item, index) => (
                                <div key={index}>
                                    <Carousel.Slide>
                                        <img
                                            className='cursor-pointer w-[560] h-[60px] object-contain'
                                            src={item}
                                            alt=""
                                            onClick={() => {
                                                setSelectedImageIndex(item)
                                            }
                                            }

                                        />
                                    </Carousel.Slide>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className='flex mr-7'>
                        {
                            highlight.size.map((item) => {
                                return (
                                    <div className='border-2 p-3 cursor-pointer hover:bg-[#5b5b5b] hover:text-white duration-300'>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HightLightsId;
