function generatePartyB(PartyA) {
    var article = document.createElement('article');
    article.id = "PartyB";
    article.className = 'box post post-excerpt';
    // 創建header並設置標題
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const aTitle = document.createElement('a');
    aTitle.textContent = "這個設定由這些群友承包了";
    h2.appendChild(aTitle);
    header.appendChild(h2);
    article.appendChild(header);
    // 加載 JSON 檔案
    fetch('data/繳交情況.json') // 假設您的 JSON 文件位於 data 目錄下
        .then(response => response.json())
        .then(data => {
            // 處理每一筆資料
            data.forEach(player => {
                if(player.PartyA !=PartyA){
                    return;
                }
                const src = "images/players/" + player.PartyB + ".png";
                if(player.style == "圖片")
                {
                    url = "gallery.html?PartyA=" + player.PartyA + "&PartyB="+ player.PartyB ; // 
                }else if(player.style == "網頁")
                {
                    url = "pieces/"+ player.Title + ".html" ; 
                }
                const button = generateButton(src, player.Title, url);
                article.appendChild(button);
            });
            document.getElementById('content').appendChild(article);
        })
        .catch(error => console.error('Error loading the JSON file:', error));
    }