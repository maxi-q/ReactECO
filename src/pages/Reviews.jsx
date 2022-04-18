import React from "react";
import { Carousel } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="Revievs">
        <div className="titul">Отзывы</div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage"
            src="https://i12.fotocdn.net/s123/1c4eb4c7d8c1e640/public_pin_l/2807720689.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              <span>Я пользователь и я доволен</span><br/>
              Ребята, что создали это чудо невероятно крутые
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage"
            src="https://www.kleo.ru/img/articles/2803505790.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              <span>Мне понравилось</span><br/>
              Хоть у меня нет ни компьютера, ни телефона, я прихожу в
              компьютерный клуб для того, чтобы зайти на этот сайт
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage "
            src="https://www.business-vector.info/wp-content/uploads/2017/07/wellcome.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              <span>Ребята молодцы</span><br/>
              Челики, что создали этот сайт, невероятьно круты. Я никогда бы не
              смог сделать настолько интерестную игру. Кста го с нами
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
