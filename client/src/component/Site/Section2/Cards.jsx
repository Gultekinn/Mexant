import React from "react";
import "../Section2/Cards.scss"
import InventoryIcon from '@mui/icons-material/Inventory';
import CloudIcon from '@mui/icons-material/Cloud';
import EvStationIcon from '@mui/icons-material/EvStation';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ExtensionIcon from '@mui/icons-material/Extension';
const Cards = () => {
  return (
    <div>
      <div className="common">
        <div className="common__one">
          <div className="common__one__card1">
<div className="common__one__card1__icon">
<InventoryIcon id="icon1"/>
</div>

<div className="common__one__card1__text">
<h4>CSS Templates</h4>
<p>TemplateMo website is the best for you to explore and download free website templates.</p>
</div>
          </div>
          <div className="common__one__card2">

          <div className="common__one__card1__icon">
<CloudIcon id="icon1"/>
</div>


<div className="common__one__card1__text">
<h4>HTML5 Web Pages</h4>
<p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
</div>      
          </div>
          <div className="common__one__card3">

          <div className="common__one__card1__icon">
<EvStationIcon id="icon1"/>
</div>


<div className="common__one__card1__text">
<h4>Responsive Designs</h4>
<p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
</div> 
          </div>
        </div>
<div className="common__two">
      <div className="common__two__card1">

      <div className="common__two__card1__icon1">
<SupportAgentIcon id="icon1"/>
</div>


<div className="common__one__card1__text">
<h4>Fast Customer Support
</h4>
<p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
</div> 
      </div>
        <div className="common__two__card2">


        <div className="common__two__card2__icon1">
<BusinessCenterIcon id="icon1"/>
</div>


<div className="common__one__card1__text">
<h4>Mobile and Tablet ready!
</h4>
<p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
</div>


        </div>
        <div className="common__two__card3">

        <div className="common__two__card2__icon1">
<ExtensionIcon id="icon1"/>
</div>
<div className="common__one__card2__text">
<h4>Fully Customizable

</h4>
<p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
</div>
        </div>
</div>
      
      </div>
    </div>
  );
};

export default Cards;
