import { getUrlParameter } from '../src/utils/getUrlParameter.js';
import { imageMapBuild } from '../src/components/imageMapBuild.js';
import { loadJson } from '../src/utils/loadJson.js';

// メイン関数
async function main() {
    const key = getUrlParameter('key');
    const jsonUrl = './asset/data/ParkArea.json'; // JSONファイルのURLを指定
    const data = await loadJson(jsonUrl);
        let highlightAreas = [];

        // JSONデータをループして処理
        data.forEach(area => {
            if (area.parkingBlock === key) {
                const bounds = area.coordinates.map(coord => [coord.y, coord.x]); // すべての座標を変換してboundsに格納
                highlightAreas.push({
                    bounds: bounds,
                    color: area.hilightColor
                });
            }
        });
       
    imageMapBuild(highlightAreas);
}

// ページがロードされたらメイン関数を実行
window.onload = main;
