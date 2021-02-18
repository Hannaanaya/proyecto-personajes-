import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';
import BadgesBox from '../components/BadgesBox';
import Badge from '../components/Badge';
import './style/Badges.css';

// const API = 'http://localhost:3000/initalState';

const Badges = () => {
  const [ media, setMedia ] = useState({
    mylist: [],
    condena: [],
    nicolas: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    .then(response => response.json())
    .then(data => setMedia(data));
  }, []);

  return media.length === 0 ? <Loading /> : (
      <React.Fragment>
            <div className="Badges">
                  <Header />
                
                 <div className="Badges__container" >
                     <div className="Badges__buttons" >
                     <Link to="/badges/second" className="btn btn-primary">
                       <h4>Más personajes</h4>
                     </Link>
                     </div>
                     <div className="Badges__boxing"> 

                     {media.mylist?.length > 0 &&
                     <BadgesBox title="Lista" >
                       {media.mylist?.map(item => 
                       <Badge key={item.id} {...item} />
                       )}
                     </BadgesBox>
                     }
                     
                       <BadgesBox title="Condena sangrienta" >
                       {media.condena?.map(item => 
                        <Badge key={item.id} {...item} />
                       )}
                       </BadgesBox>

                       <BadgesBox title="Mi demonio Nicolás">
                       {media.nicolas?.map(item => 
                        <Badge key={item.id} {...item} />
                       )}
                       </BadgesBox>

                     </div>
                     <center>
                       <h1>Autor@: Hanna Anaya</h1>
                    </center>
                </div>
            </div>
      </React.Fragment>
    );
    
}

export default Badges;