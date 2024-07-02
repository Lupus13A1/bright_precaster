'use client';

import React, { useState } from "react";
import Modal from "react-modal";
import SectionTitle from "../Common/SectionTitle";

const ProductFour = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage("");
    };

    return (
               <section id="about" className="pt-14 md:pt-10 lg:pt-10">
            <div className="container px-5 py-30 mx-auto">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-1/2">
                            <SectionTitle title="Stair" paragraph="" mb="44px" />
                            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[750px] md:max-w-[1800px] place-items-center">
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/stair2-1.png" style={{ borderRadius: '9px', width: '100%', height: 'auto' }} onClick={() => openModal('/images/product/stair2-1.png')} />
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/2.png" style={{ borderRadius: '9px',  width: '100%', height: 'auto' }} onClick={() => openModal('/images/product/2.png')} />
                            <img className="hover:opacity-75 cursor-pointer" src="/images/product/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (2).png" style={{ borderRadius: '9px', width: '100%', height: 'auto' }} onClick={() => openModal('/images/product/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (2).png')} />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        overflow: 'hidden', 
                    },
                }}
            >
                <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer', color: 'white' }}></button>
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            </Modal>
        </section>
);
};

export default ProductFour;