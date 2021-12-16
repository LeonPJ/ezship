import xml from 'xml';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

const params = {
    su_id: process.env.SU_ID,
    order_no: process.env.ORDER_ID,// 該筆訂單於 ezship 編號
    rtn_url: process.env.RT_URL,
    web_para: process.env.WEB_PARA,// option
};

axios.get('http://www.ezship.com.tw/emap/ezship_request_order_status_api_byorder.jsp', { params })
    .then((result) => {
        console.log(result.request._redirectable._options.query);
        // const params = new URLSearchParams(result.request.path.slice(2));
        // console.log(params.get("web_para"));
        // console.log(params.get("order_status"));
    })
    .catch((error) => console.log(error));

