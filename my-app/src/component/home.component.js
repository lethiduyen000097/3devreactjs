import React from "react";

import {
    BrowserRouter as Router,
  } from "react-router-dom";

const HomeBay = () => {
    return (
        <Router>
        <div>
            <h3>Danh sách các hãng hàng không ở Việt Nam</h3>

            <nav>
                <ul>
                    <li>
                    <a href="https://www.vietnamairlines.com/vn/vi/home">Hãng Vietnam Airline (VJ)</a>
                    </li>
                    <li>
                    <a href="https://www.vietjetair.com/sites/web/vi-vn/home">Hãng Vietjet Air (VJ)</a>
                    </li>
                    <li>
                    <a href="https://www.jetstar.com/vn/vi/home">Hãng Jetstar Pacific Airlines (BL)</a>
                    </li>
                    <li>
                    <a href="https://www.bambooairways.com/vn-vi/">Hãng Bamboo Airways (QH)</a>
                    </li>
                </ul>
                </nav>
        </div>
        </Router>
    )
}

export default HomeBay;