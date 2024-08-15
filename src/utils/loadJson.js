export async function loadJson(url) {
    try{
        const response = await fetch(url); // ファイルのパスを指定
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error loading JSON data:', error);
        return [];
    }
}