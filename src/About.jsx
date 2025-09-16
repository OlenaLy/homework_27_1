import imgCat1 from "./assets/img/1.jpg";
import imgCat2 from "./assets/img/2.jpg";
import imgCat3 from "./assets/img/3.jpg";
import imgCat4 from "./assets/img/4.jpg";
import imgCat5 from "./assets/img/5.jpg";
import imgCat6 from "./assets/img/6.jpg";
import imgCat7 from "./assets/img/7.jpg";
import imgCat8 from "./assets/img/8.jpg";
import imgCat9 from "./assets/img/9.jpg";

export default function About (){
    return <>
      <h2>Про мене</h2>
      <h4>Спочатку я був маленький і робив маленьку шкоду</h4>
      <img src={imgCat1}  className='imgCat' alt="" />
      <img src={imgCat2} className='imgCat' alt="" />
      <img src={imgCat3} className='imgCat' alt="" />
      <h4>Потім я трошки став старше і чомусь вдомі зникли всі квіти і багато чого іншого</h4>
      <img src={imgCat4} className='imgCat' alt="" />
      <img src={imgCat5} className='imgCat' alt="" />
      <img src={imgCat6} className='imgCat' alt="" />
      <h4>Потім у мене з'явиллася іграшка яка сама рухається. Тільки потрібно вчасно хвіст ховати</h4>
      <img src={imgCat7} className='imgCat' alt="" />
      <h4>Я дуже люблю грати вночі. Підйом в 03:15! </h4>
      <img src={imgCat8} className='imgCat' alt="" />
      <h4>Мяу!</h4>
      <img src={imgCat9} className='imgCat' alt="" />
      </>      
}