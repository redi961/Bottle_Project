import * as React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Plotly = () => {
    let [plot_data, setPlot_data] = useState([
        {
            bottle: '1월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        },{
            bottle: '2월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        },{
            bottle: '월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        },{
            bottle: '4월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }, {
            bottle: '5월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }, {
            bottle: '6월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '7월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '8월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '9월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '10월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '11월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }
        , {
            bottle: '12월',
            Soju: 1200,
            Beer: 1000,
            Wine: 1100,
            Wisky: 1300
        }

    ]);

    useEffect(() => {
        axios
            .get('')
            .then((Response) => {
                setPlot_data(Response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        })

    const handle = {
        barClick: (data : any) => {
            console.log(data);
        },

        legendClick: (data : any) => {
            console.log(data);
        }
    };

    return (
        // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <div
            style={{
                width: '50vw',
                height: '50vh',
                margin: '0 auto'
            }}>
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
                    left: 60
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
                    legend: 'price', // left 글씨
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
        </div>
    );
};

export default Plotly;