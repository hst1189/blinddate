const music_div = document.createElement('div')
music_div.id = 'music_player'   // 设置元素id
music_div.style = 'width: 400px; margin: 65px auto auto auto; background-color: lightblue;' 
document.body.appendChild(music_div)  // 插入到body元素最后
//document.getElementsByClassName('about')[0].appendChild(music_div)

const ap = new APlayer({
    container: document.getElementById('music_player'),
    fixed: true,
    audio: [
        {
        name: 'Time after time ～花舞う街で～',
        artist: '倉木 麻衣',
        url: '../music/TimeAfterTime.mp3',
        cover: '../music/cover1.jpg'
        }
    ]
});

