import * as React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import '../../styles/Plotly.css'

const Plotly = () => {
    let [soju_sum, setSoju_sum] = useState(null);
    let [beer_sum, setBeer_sum] = useState(null);
    let [wisky_sum, setWisky_sum] = useState(null);
    let [wine_sum, setWine_sum] = useState(null);
    let [plot_data, setPlot_data] = useState([
        {
            bottle: '2010년',
            Soju: 23110,
            Beer: 4176,
            Wine: 567,
            Wisky: 1453
        }, {
            bottle: '2011년',
            Soju: 21977,
            Beer: 3979,
            Wine: 631,
            Wisky: 1343
        }, {
            bottle: '2012년',
            Soju: 21179,
            Beer: 3817,
            Wine: 704,
            Wisky: 1276
        }, {
            bottle: '2013년',
            Soju: 19945,
            Beer: 3474,
            Wine: 862,
            Wisky: 1247
        }, {
            bottle: '2014년',
            Soju: 18425,
            Beer: 3229,
            Wine: 963,
            Wisky: 1252
        }, {
            bottle: '2015년',
            Soju: 18265,
            Beer: 3214,
            Wine: 1014,
            Wisky: 1288
        }, {
            bottle: '2016년',
            Soju: 17523,
            Beer: 3062,
            Wine: 1081,
            Wisky: 1315
        }, {
            bottle: '2017년',
            Soju: 16769,
            Beer: 2893,
            Wine: 1163,
            Wisky: 1302
        }, {
            bottle: '2018년',
            Soju: 16401,
            Beer: 2839,
            Wine: 1251,
            Wisky: 1336
        }, {
            bottle: '2019년',
            Soju: 16124,
            Beer: 2826,
            Wine: 1341,
            Wisky: 1388
        }, {
            bottle: '2020년',
            Soju: 15670,
            Beer: 2617,
            Wine: 1316,
            Wisky: 1506
        }, {
            bottle: '2021년',
            Soju: 15307,
            Beer: 2486,
            Wine: 1310,
            Wisky: 1603
        }, {
            bottle: '2022년',
            Soju: 14824,
            Beer: 2402,
            Wine: 1235,
            Wisky: 1659
        }
    ]);

    function Year_click() {
        // axios     .get('/api/year')     .then((Response) => {
        setPlot_data([
            {
                bottle: '2010년',
                Soju: 23110,
                Beer: 4176,
                Wine: 567,
                Wisky: 1453
            }, {
                bottle: '2011년',
                Soju: 21977,
                Beer: 3979,
                Wine: 631,
                Wisky: 1343
            }, {
                bottle: '2012년',
                Soju: 21179,
                Beer: 3817,
                Wine: 704,
                Wisky: 1276
            }, {
                bottle: '2013년',
                Soju: 19945,
                Beer: 3474,
                Wine: 862,
                Wisky: 1247
            }, {
                bottle: '2014년',
                Soju: 18425,
                Beer: 3229,
                Wine: 963,
                Wisky: 1252
            }, {
                bottle: '2015년',
                Soju: 18265,
                Beer: 3214,
                Wine: 1014,
                Wisky: 1288
            }, {
                bottle: '2016년',
                Soju: 17523,
                Beer: 3062,
                Wine: 1081,
                Wisky: 1315
            }, {
                bottle: '2017년',
                Soju: 16769,
                Beer: 2893,
                Wine: 1163,
                Wisky: 1302
            }, {
                bottle: '2018년',
                Soju: 16401,
                Beer: 2839,
                Wine: 1251,
                Wisky: 1336
            }, {
                bottle: '2019년',
                Soju: 16124,
                Beer: 2826,
                Wine: 1341,
                Wisky: 1388
            }, {
                bottle: '2020년',
                Soju: 15670,
                Beer: 2617,
                Wine: 1316,
                Wisky: 1506
            }, {
                bottle: '2021년',
                Soju: 15307,
                Beer: 2486,
                Wine: 1310,
                Wisky: 1603
            }, {
                bottle: '2022년',
                Soju: 14824,
                Beer: 2402,
                Wine: 1235,
                Wisky: 1659
            }
        ]);
        const sojuSum = plot_data.reduce((sum, item) => sum + item.Soju, 0);
        setSoju_sum(sojuSum)

        // 맥주 합계 계산
        const beerSum = plot_data.reduce((sum, item) => sum + item.Beer, 0);
        setBeer_sum(beerSum)

        // 와인 합계 계산
        const wineSum = plot_data.reduce((sum, item) => sum + item.Wine, 0);
        setWine_sum(wineSum);

        // 위스키 합계 계산
        const wiskySum = plot_data.reduce((sum, item) => sum + item.Wisky, 0);
        setWisky_sum(wiskySum);
        // }) .catch((error) => {     console.log(error); })
    }

    function Month_click() {

        // axios     .get('/api/month')     .then((Response) => {
        setPlot_data([
            {
                bottle: '1월',
                Soju: 1222,
                Beer: 201,
                Wine: 108,
                Wisky: 184
            }, {
                bottle: '2월',
                Soju: 1138,
                Beer: 186,
                Wine: 97,
                Wisky: 165
            }, {
                bottle: '3월',
                Soju: 1303,
                Beer: 205,
                Wine: 105,
                Wisky: 179
            }, {
                bottle: '4월',
                Soju: 1176,
                Beer: 197,
                Wine: 98,
                Wisky: 167
            }, {
                bottle: '5월',
                Soju: 1265,
                Beer: 203,
                Wine: 102,
                Wisky: 176
            }, {
                bottle: '6월',
                Soju: 1234,
                Beer: 197,
                Wine: 100,
                Wisky: 169
            }, {
                bottle: '7월',
                Soju: 1287,
                Beer: 213,
                Wine: 106,
                Wisky: 184
            }, {
                bottle: '8월',
                Soju: 1321,
                Beer: 221,
                Wine: 115,
                Wisky: 191
            }, {
                bottle: '9월',
                Soju: 1276,
                Beer: 209,
                Wine: 110,
                Wisky: 182
            }, {
                bottle: '10월',
                Soju: 1310,
                Beer: 214,
                Wine: 112,
                Wisky: 190
            }, {
                bottle: '11월',
                Soju: 1263,
                Beer: 204,
                Wine: 102,
                Wisky: 178
            }, {
                bottle: '12월',
                Soju: 1345,
                Beer: 230,
                Wine: 120,
                Wisky: 201
            }
        ]);
        const sojuSum = plot_data.reduce((sum, item) => sum + item.Soju, 0);
        setSoju_sum(sojuSum)

        // 맥주 합계 계산
        const beerSum = plot_data.reduce((sum, item) => sum + item.Beer, 0);
        setBeer_sum(beerSum)

        // 와인 합계 계산
        const wineSum = plot_data.reduce((sum, item) => sum + item.Wine, 0);
        setWine_sum(wineSum);

        // 위스키 합계 계산
        const wiskySum = plot_data.reduce((sum, item) => sum + item.Wisky, 0);
        setWisky_sum(wiskySum);
        // }) .catch((error) => {     console.log(error); })
    }

    function Day_click() {
        // axios     .get('/api/week')     .then((Response) => {
        setPlot_data([
            {
                bottle: '월',
                Soju: 140,
                Beer: 23,
                Wine: 12,
                Wisky: 21
            }, {
                bottle: '화',
                Soju: 135,
                Beer: 19,
                Wine: 10,
                Wisky: 19
            }, {
                bottle: '수',
                Soju: 152,
                Beer: 25,
                Wine: 14,
                Wisky: 23
            }, {
                bottle: '목',
                Soju: 130,
                Beer: 20,
                Wine: 11,
                Wisky: 20
            }, {
                bottle: '금',
                Soju: 148,
                Beer: 22,
                Wine: 13,
                Wisky: 25
            }, {
                bottle: '토',
                Soju: 160,
                Beer: 26,
                Wine: 14,
                Wisky: 28
            }, {
                bottle: '일',
                Soju: 152,
                Beer: 24,
                Wine: 12,
                Wisky: 24
            }
        ]);
        const sojuSum = plot_data.reduce((sum, item) => sum + item.Soju, 0);
        setSoju_sum(sojuSum)

        // 맥주 합계 계산
        const beerSum = plot_data.reduce((sum, item) => sum + item.Beer, 0);
        setBeer_sum(beerSum)

        // 와인 합계 계산
        const wineSum = plot_data.reduce((sum, item) => sum + item.Wine, 0);
        setWine_sum(wineSum);

        // 위스키 합계 계산
        const wiskySum = plot_data.reduce((sum, item) => sum + item.Wisky, 0);
        setWisky_sum(wiskySum);
    }

    const handle = {
        barClick: (data : any) => {
            // console.log(data);
        },

        legendClick: (data : any) => {
            // console.log(data);
        }
    };

    return (
        // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정

        <>
            <Sidebar/>
            <span className='count_plot'>

                <div className='count_content'>
                    <div>
                        <div className='soju_count'>
                            <div>Soju</div>
                            <div id='count'>{soju_sum}</div>
                        </div>
                        <div>
                            <div className='beer_count'>Beer</div>
                            <div id='count'>
                                {beer_sum}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='wisky_count'>Wisky</div>
                            <div id='count'>{wisky_sum}</div>
                        </div>
                        <div>
                            <div className='wind_count'>Wine</div>
                            <div id='count'>{wine_sum}</div>
                        </div>

                    </div>
                </div>
                <div className='Plot_Content'>

                    <ResponsiveBar
                        /**
                        * chart에 사용될 데이터
                        */
                        data={plot_data}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */
                        keys={['Soju', 'Beer', 'Wine', 'Wisky']}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */
                        indexBy="bottle"
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */
                        margin={{
                            top: 50,
                            right: 130,
                            bottom: 50,
                            left: 70
                        }} groupMode="grouped"
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */
                        padding={0.3}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */
                        colors={{
                            scheme: 'set3'
                        }}
                        // 커스터하여 사용할 때
                        
                        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
                        
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */
                        colorBy="id"
                        // 색상을 keys 요소들에 각각 적용
                        
                        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
                        theme={{
                            /**
                         * label style (bar에 표현되는 글씨)
                        */
                            labels: {
                                text: {
                                    fontSize: 14,
                                    fill: '#000000'
                                }
                            },
                            /**
                         * legend style (default로 우측 하단에 있는 색상별 key 표시)
                        */
                            legends: {
                                text: {
                                    fontSize: 12,
                                    fill: '#000000'
                                }
                            },
                            axis: {
                                /**
                             * axis legend style (bottom, left에 있는 글씨)
                            */
                                legend: {
                                    text: {
                                        fontSize: 20,
                                        fill: '#000000'
                                    }
                                },
                                /**
                             * axis ticks style (bottom, left에 있는 값)
                            */
                                ticks: {
                                    text: {
                                        fontSize: 16,
                                        fill: '#000000'
                                    }
                                }
                            }
                        }}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */
                        axisBottom={{
                            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
                            tickPadding: 5, // tick padding
                            tickRotation: 0, // tick 기울기
                            legend: 'bottle', // bottom 글씨
                            legendPosition: 'middle', // 글씨 위치
                            legendOffset: 40, // 글씨와 chart간 간격
                        }}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */

                        /**
                        * axis left 설정
                        */
                        axisLeft={{
                            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
                            tickPadding: 5, // tick padding
                            tickRotation: 0, // tick 기울기
                            legend: 'Count', // left 글씨
                            legendPosition: 'middle', // 글씨 위치
                            legendOffset: -60, // 글씨와 chart간 간격
                        }}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */

                        /**
                        * axis left 설정
                        */

                        /**
                        * label 안보이게 할 기준 width
                        */
                        labelSkipWidth={36}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */

                        /**
                        * axis left 설정
                        */

                        /**
                        * label 안보이게 할 기준 width
                        */

                        /**
                        * label 안보이게 할 기준 height
                        */
                        labelSkipHeight={12}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */

                        /**
                        * axis left 설정
                        */

                        /**
                        * label 안보이게 할 기준 width
                        */

                        /**
                        * label 안보이게 할 기준 height
                        */

                        /**
                        * bar 클릭 이벤트
                        */
                        onClick={handle.barClick}
                        /**
                        * chart에 사용될 데이터
                        */

                        /**
                        * chart에 보여질 데이터 key (측정되는 값)
                        */

                        /**
                        * keys들을 그룹화하는 index key (분류하는 값)
                        */

                        /**
                        * chart margin
                        */

                        /**
                        * chart padding (bar간 간격)
                        */

                        /**
                        * chart 색상
                        */

                        /**
                        * color 적용 방식
                        */

                        /**
                        * axis bottom 설정
                        */

                        /**
                        * axis left 설정
                        */

                        /**
                        * label 안보이게 할 기준 width
                        */

                        /**
                        * label 안보이게 할 기준 height
                        */

                        /**
                        * bar 클릭 이벤트
                        */

                        /**
                        * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
                        */
                        legends={[{
                                dataFrom: 'keys', // 보일 데이터 형태
                                anchor: 'bottom-right', // 위치
                                direction: 'column', // item 그려지는 방향
                                justify: false, // 글씨, 색상간 간격 justify 적용 여부
                                translateX: 120, // chart와 X 간격
                                translateY: 0, // chart와 Y 간격
                                itemsSpacing: 2, // item간 간격
                                itemWidth: 100, // item width
                                itemHeight: 20, // item height
                                itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                                itemOpacity: 0.85, // item opacity
                                symbolSize: 20, // symbol (색상 표기) 크기
                                effects: [
                                    {
                                        // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ],
                                onClick: handle.legendClick, // legend 클릭 이벤트
                            }
                        ]}/>
                    <div className='plotly_button'>
                        <button onClick={Year_click}>year</button>
                        <button onClick={Month_click}>Month</button>
                        <button onClick={Day_click}>Day</button>
                    </div>
                </div>
            </span>
        </>
    );
};

export default Plotly;