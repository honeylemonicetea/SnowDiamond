import React, {useState} from 'react'
import {Carousel, Card, CardDeck} from "react-bootstrap"
import './lookbook.css'


function Lookbook(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="lookbook-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="car own-car1 d-block w-100">
                    <p className='caption'>.wood</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                 <div className="car own-car2 d-block w-100">
                 <p className='caption'>.air</p>
                 </div>
            </Carousel.Item>
            <Carousel.Item>

                  <div className="car own-car3 d-block w-100">
                  <p className='caption'>.earth</p>
                  </div>
            </Carousel.Item>
        </Carousel>

        <div className="styles-container">
  <CardDeck>
    <Card>
      <div className="card-photo1 photo"/>
      <Card.Body>
        <Card.Title>Punk</Card.Title>
        <Card.Text>Some overarching elements of punk style include leather jackets, deconstructed blazers, ripped fishnet stockings, skinny jeans, and chunky black boots.</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <div className="card-photo2 photo"/>
      <Card.Body>
        <Card.Title>Bohemian</Card.Title>
        <Card.Text>Also known as “boho” or “boho chic,” bohemian style borrows from the 1960’s hippie aesthetic and festival culture. The style incorporates earth tones</Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <div className="card-photo3 photo"/>
      <Card.Body>
        <Card.Title>Grunge</Card.Title>
        <Card.Text>Inspired by grunge music and the subculture that originated in the ’80s and ’90s Seattle, grunge fashion features thrift-store finds like plaid flannel shirts</Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo4 photo"/>
      <Card.Body>
        <Card.Title>Preppy</Card.Title>
        <Card.Text>Preppy style is inspired by the clothing and uniforms traditionally worn at private East Coast prep schools and Ivy League colleges.</Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo5 photo"/>
      <Card.Body>
        <Card.Title>Sporty</Card.Title>
        <Card.Text>Sporty style, also known as athleisure, takes elements of athletic wear, like leggings, bike shorts, and oversize sweatshirts, out of the gym and onto the streets.</Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo6 photo"/>
      <Card.Body>
        <Card.Title>Streetwear</Card.Title>
        <Card.Text>
        Streetwear is a casual fashion style that first became popular in the 1990s. It incorporates comfortable yet trendy clothing such as logo T-shirts and crop tops</Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo7 photo"/>
      <Card.Body>
        <Card.Title>Casual</Card.Title>
        <Card.Text>A Western dress code that is relaxed, occasional, spontaneous and suited for everyday use.</Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo8 photo"/>
      <Card.Body>
        <Card.Title>Gothic </Card.Title>
        <Card.Text>A clothing style marked by dark, mysterious, antiquated and homogeneous features. It is worn by members of the </Card.Text>
      </Card.Body>
    </Card>
    <Card>
    <div className="card-photo9 photo"/>
      <Card.Body>
        <Card.Title>Mori Girl</Card.Title>
        <Card.Text>Japanese fashion that centers around an appearance inspired by living in the woods.</Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
          </div>
          </div>
        
    );
}

export default Lookbook;
