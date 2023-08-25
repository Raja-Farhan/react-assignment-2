import React from 'react'
import Card from '../Card/Card'
import card1Image from '../../assets/images/card1.svg' 
import card2Image from '../../assets/images/card2.svg'
import card3Image from '../../assets/images/card3.svg'

const CardContainer = () => {
  const CardData = [
    {
        title: 'App Development',
        content: 'Helping families live intelligently meand we`re always working to bring our customers.',
        image: card1Image,
    },
    {
        title: 'Cloud Storage',
        content: 'Helping families live intelligently meand we`re always working to bring our customers.',
        image: card2Image,
    },
    {
        title: 'UX Planning',
        content: 'Helping families live intelligently meand we`re always working to bring our customers.',
        image: card3Image,
    }
  ];
  
    return (
    <>
        <div className='row d-flex justify-content-center'>
                    {CardData.map((card, index) => (
                    <div className="col-12 col-sm-6 col-md-6 col-xl-3" key={index}>
                        <Card 
                            key={index}
                            title={card.title}
                            content={card.content}
                            image={card.image}
                        />
                    </div>    
                    ))}
                </div>
    </>
  )
}

export default CardContainer