import React from "react";
import { Carousel } from "react-bootstrap";

const Reviews = () => {
  return (
    <div>
      <Carousel className="Reviews">
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage"
            src="https://www.iphones.ru/wp-content/uploads/2021/09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2021-09-07-%D0%B2-19.48.05.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Я пользователь и я доволен</h3>
            <p>Ребята, что создали это чудо невероятно крутые</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgewnQZ40gyQHvQLQrj0ufZFBt4TkLUMbiNqWUCuDGNj9wJZ8PqGYLlwOW5diS16Ao5k&usqp=CAU"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Мне понравилось</h3>
            <p>
              Хоть у меня нет ни компьютера, ни телефона, я прихожу в
              компьютерный клуб для того, чтобы зайти на этот сайт
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ReviewsImage "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8AURBFXoZYjiQsWJePEfXVurdaacgvIVYqlOUbN5P9dV0v9u8Q5StkdT8Udus4-2FYE&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Ребята молодцы</h3>
            <p>
              Челмки, что создали этот сайт, невероятьно круты. Я никогда бы не
              смог сделать настолько интерестную игру
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
