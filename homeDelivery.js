import xml from 'xml';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

const config = {
    headers: { 'contentType': 'text/html;charset=big5' }
};

let xmlOrder = [{
    ORDER: [
        { suID: process.env.SU_ID },// 賣家 ezship 帳號
        { orderID: process.env.ORDER_ID },// 該筆訂單於 ezship 編號 (自訂)
        { orderStatus: process.env.ORDER_STATUS },// 取貨方式
        { orderType: process.env.ORDER_TYPE },
        { orderAmount: process.env.ORDER_AMOUNT },
        { rvName: { _cdata: process.env.RV_NAME } },
        { rvEmail: process.env.RV_EMAIL },
        { rvMobile: process.env.RV_MOBOLE },
        { rvAddr: { _cdata: process.env.RV_ADDR } },
        { rvZip: process.env.RV_ZIP },
        { rtURL: process.env.RT_URL },// ezship 回傳訂單狀態 url
        { webPara: process.env.WEB_PARA }// ezship 回傳至 url 參數 (自訂)
    ]
}];

function sendData() {
    let context = xml(xmlOrder);
    let xmlHeader = 'web_map_xml=';
    let data = xmlHeader + context;
    // console.log(data);

    axios.post('https://www.ezship.com.tw/emap/ezship_xml_order_api_ex.jsp', data, config)
        .then((result) => { console.log(result) })
        .catch((err) => { console.error(err) });
}

sendData();
