let res = {
  code: 200,
  message: "成功",
  content: {
    data: [
      {
        author_name: "user001",
        c_yichang: "湖泊消失术",
        auditor_name: "user001",
        title: "示例水",
        content: "示例水资源",
        update_time: 1671000695208,
        c_c_year: 1608739200000,
        model_name: "dtz_shui_hedao_m_pdsj_shui",
        publish_time: 1671000695208,
        c_c_update_time: 1671000592000,
        id: "32211662-7b2a-4805-9127-a057a0f46504",
        state: 3,
        c_geometry:
          '"geometry": {         "coordinates": [           [             [               121.80900368447004,               31.053935480315246             ],             [               121.80013337002538,               31.053935480315246             ],             [               121.80013337002538,               31.044263490820825             ],             [               121.80900368447004,               31.044263490820825             ],             [               121.80900368447004,               31.053935480315246             ]           ]         ],         "type": "Polygon"       }',
        c_c_check: "145",
        create_time: 1671000679000,
        publisher_name: "user001",
        c_c_area_code: "310115134000",
        column_name: "河道资源",
        model_id: "85",
        auditor_comment: "1",
        read_number: 0,
        column_id: 80,
        c_area: "15",
        c_shui_type: "2",
        c_c_latlng: {
          geoType: 1,
          geometry: {
            dimension: 2,
            firstPoint: {
              $ref: "@",
            },
            haveMeasure: false,
            lastPoint: {
              $ref: "@",
            },
            m: 0.0,
            measured: false,
            srid: 0,
            type: 1,
            typeString: "POINT",
            value: "(121.777611 31.028545)",
            x: 121.777611,
            y: 31.028545,
            z: 0.0,
          },
          null: true,
          type: "geometry",
          value: "POINT(121.777611 31.028545)",
        },
        secret_level: 0,
        c_c_shui_area: 550.0,
        author_id: 4,
        check_time: 1671000689831,
      },
    ],
    count: 1,
  },
};

let data = []
res.content.data.forEach((v) => {
  data = JSON.parse(`{${v.c_geometry}}`).geometry.coordinates[0]

//   console.log(data);
});
// console.log(data);

data = data.map((v)=>{
    return [v[1],v[0]]
})
console.log(data);



