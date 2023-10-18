import { HoverCard, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from './data';


function HightLightsId() {
    const [opened, { open, close }] = useDisclosure(false);
    const { id } = useParams();
    const highlight = productData.find(item => item.id === parseInt(id));

    if (!highlight) {
        return <div className="">data not found</div>;
    }

    return (
        <div className='container mx-auto w-[95%] md:flex justify-around'>
            <div className='right_side'>
                <HoverCard shadow="md" closeDelay={200}>
                    <Modal size="calc(100vw - 3rem)" opened={opened} onClose={close}>
                        <HoverCard.Target>
                            <img style={{ width: "80%", objectFit: "contain ", height: "500px" }} src={highlight.image} alt="" />
                        </HoverCard.Target>
                    </Modal>
                    <img src={highlight.image} onClick={open} title='Open modal' style={{ cursor: "pointer" }} />
                    <HoverCard.Dropdown>
                        <Text size="sm">{highlight.name}</Text>
                    </HoverCard.Dropdown>
                </HoverCard >
            </div>
            <div className='left_side'>
                <div>
                    <h1 className='text-[#5b5b5b] text-2xl font-extrabold'>
                        {highlight.name2}
                    </h1>
                </div>
            </div>
        </div >
    );
}

export default HightLightsId;

