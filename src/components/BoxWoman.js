import React from 'react';
import Image from './Image';
import '../components/style/BoxWoman.css';
import FL from '../images/woman/FionaLuna.jpeg';
import f1 from '../images/woman/Fiona1.jpg';
import f2 from '../images/woman/fiona2.jpg';
import f3 from '../images/woman/fiona3.jpg';
import f4 from '../images/woman/fiona4.jpeg';
import f5 from '../images/woman/fiona5.jpg';
import f6 from '../images/woman/fiona6.jpg';
import f7 from '../images/woman/fiona7.jpg';
import f8 from '../images/woman/fiona8.jpeg';
import f9 from '../images/woman/fiona9.jpeg';
import f10 from '../images/woman/fiona10.jpeg';
import Yane from '../images/woman/yane.jpeg';
import y1 from '../images/woman/yane1.jpeg';
import y2 from '../images/woman/yane2.jpeg';
import y3 from '../images/woman/yane3.jpg';
import y4 from '../images/woman/yane4.jpeg';
import Linda from '../images/woman/Linda.jpeg';
import l1 from '../images/woman/linda1.jpg';
import l2 from '../images/woman/linda2.jpeg';
import l3 from '../images/woman/linda3.jpg';
import l4 from '../images/woman/linda4.jpg';
import l5 from '../images/woman/linda5.jpeg';
import l6 from '../images/woman/linda6.jpeg';
import l7 from '../images/woman/linda7.jpeg';
import Penny from '../images/woman/Penny.jpeg';
import p1 from '../images/woman/penny1.jpeg';
import p2 from '../images/woman/penny2.jpeg';
import p3 from '../images/woman/penny3.jpeg';
import p4 from '../images/woman/penny4.jpg';

class BoxWoman extends React.Component {
    render() {
        return (
            <div className="Box_woman">
                <div className="BoxWoman_container">
                <h2> Fiona</h2>
                <div className="Box">
                <Image src={FL} />
                <Image src={f1} />
                <Image src={f2} />
                <Image src={f3} />
                <Image src={f4} />
                <Image src={f5} />
                <Image src={f6} />
                <Image src={f7} />
                <Image src={f8} />
                <Image src={f9} />
                <Image src={f10} />
                </div>

                <h2>Yane</h2>
                <div className="Box">
                <Image src={Yane} />
                <Image src={y1} />
                <Image src={y2} />
                <Image src={y3} />
                <Image src={y4} />
                </div>

                <h2>Rosalinda</h2>
                <div className="Box">
                <Image src={Linda} />
                <Image src={l1} />
                <Image src={l2} />
                <Image src={l3} />
                <Image src={l4} />
                <Image src={l5} />
                <Image src={l6} />
                <Image src={l7} />
                </div>

                <h2>"Penny"</h2>
                <div className="Box">
                <Image src={Penny} />
                <Image src={p1} />
                <Image src={p2} />
                <Image src={p3} />
                <Image src={p4} />
                </div>

                </div>
            </div>
        )
    }
};

export default BoxWoman;