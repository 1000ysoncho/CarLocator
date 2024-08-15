import { getUrlParameter } from '../utils/getUrlParameter.js';
import { loadJson } from '../utils/loadJson.js';

export async function imageMapBuild(highlightAreas) {
    const key = getUrlParameter('key');
    const jsonUrl = './asset/data/ParkArea.json'; // JSONファイルのURLを指定
    const data = await loadJson(jsonUrl);

    // 指定された key に対応するエリア情報を取得
    const areaData = data.find(area => area.parkingBlock === key);

    if (!areaData) {
        console.error('Specified parking block not found in JSON data.');
        return;
    }

    document.getElementById('apartment').textContent = areaData.apartment;
    document.getElementById('floor').textContent = areaData.floor;
    document.getElementById('block').textContent = areaData.block;


    var map = L.map('map', {
        crs: L.CRS.Simple,
        zoom: 13,
        minZoom: -1,
        center: [51.505, -0.09],
        maxBounds: [
            [0, 0], // 南西座標
            [450, 450]  // 北東座標
        ],
        maxBoundsViscosity: 1.0,
        attributionControl: false,
        zoomDelta: 0.1,  // ズームのステップを小さくする
        zoomSnap: 0.1,    // ズームのスナップを小さくする
        touchZoom: true,  // タッチズームを有効化
        zoomControl: false // default true
    }).setView([300, 300], 0);

//    const key = getUrlParameter('key');
//    var imageUrl = loadJson.imageUrl.key(); // 画像ファイルのパス
    var imageUrl = areaData.imageUrlPath; 

    var imageBounds = [[0, 0], [450, 450]]; //画像サイズの指定。
    L.imageOverlay(imageUrl, imageBounds).addTo(map); //用意した画像をoverlayさせている
    map.fitBounds(imageBounds);
    highlightAreas.forEach(function(area) {
        L.polygon(area.bounds, { color: area.color, weight: 2 }).addTo(map); // ポリゴンを描画
    });
}