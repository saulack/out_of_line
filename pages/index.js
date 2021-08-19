import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (


    <div>
<meta httpEquiv="Access-Control-Allow-Origin" content="*"></meta>
        <Link href="/about">
            <a>About Page</a>
        </Link>
{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[0].productData.image_url)}

        <h1>Here are the items you requested</h1>
        <div id="items">
            <div>
                <img src={JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[0].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[0].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[0].productData.price)}</div>
                <button>Keep</button>
            </div>
                <img src={JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[1].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[1].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[1].productData.price)}</div>
                <button>Keep</button>
            <div>
                 <img src={JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[2].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[2].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[1].variations[0].payload.data.slots[2].productData.price)}</div>
                <button>Keep</button>
            </div>
        </div>


        {/* //recom */}
        <h1>{JSON.stringify(props.data.choices[0].variations[0].payload.data.custom.title)}</h1>
        <div class="recom-parent">
            <div>
                <img src={JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[0].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[0].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[0].productData.price)}</div>
                <button>Add to cart</button>
            </div>
                <img src={JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[1].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[1].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[1].productData.price)}</div>
                <button>Add to cart</button>
            <div>
                 <img src={JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[2].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[2].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[2].productData.price)}</div>
                <button>Add to cart</button>
            </div>
            <div>
                 <img src={JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[3].productData.image_url)}></img>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[3].productData.name)}</div>
                <div>{JSON.stringify(props.data.choices[0].variations[0].payload.data.slots[3].productData.price)}</div>
                <button>Add to cart</button>
            </div>

        </div>
    </div>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://dy-api.com/v2/serve/user/choose', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "DY-API-Key": "ffd22a3daa249e0ddb74b1af26af48ae8279edbc544ef679b418acf3d34f23c8"
        },
        body: JSON.stringify({
            "user":{
            "dyid":"8552335913049288897",
            "dyid_server":"8552335913049288897"
        },
        "session":{
            "dy":"v8t6mxr5w0hrligm6rlb2w9i005ipmmq"
        },
            "selector":{
            "names":["recs", "OOL items"]
            },
            "context":{
            "page":{
            "type":"CART",
            "data":["3542463610958", "3542463479886", "3542460858446"],
            "location":"https://www.btyuo.com",
            "referrer":"https://www.google.com/"
            },
            "device":{
            "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54",
            "ip":"186.146.43.195"
            }
        }
    })
    }).then(r => {
        return r;
    })


    const data = await res.json();

    return {
        data
    };
};

export default Index;

  body: JSON.stringify({
            "user":{
            "dyid":"8552335913049288897",
            "dyid_server":"8552335913049288897"
        },
        "session":{
            "dy":"v8t6mxr5w0hrligm6rlb2w9i005ipmmq"
        },
            "selector":{
            "names":["recs"]
            },
            "context":{
            "page":{
            "type":"CART",
            "data":["3542463840334", "3542463610958", "3542460858446"],
            "location":"https://www.btyuo.com",
            "referrer":"https://www.google.com/"
            },
            "device":{
            "userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54",
            "ip":"186.146.43.195"
            }
        }
    })