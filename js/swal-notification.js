const elem = document.querySelector("#canvasHolder");
const getWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {height, width};
}

const placeConfetti = (x, y, angle = 60, particleCount = 100) => {
  const { height, width } = getWindowSize();
  const origin = { x: x / width , y: y / height  };

  confetti({ origin, angle, particleCount, spread: 360,zIndex :10000000 });
  
};

elem.addEventListener('resultSpin', (e) =>{
    if(e.detail.score == null){
        Swal.fire(
          'Chương trình kết thúc',
          'Đã hết phần thưởng',
          'error'
        )
      } else if (e.detail.score == '99'){
        Swal.fire({
            title: 'Chúc bạn may mắn lần sau',
            text: 'Hẹn gặp bạn lần quay kế tiếp',
            icon: 'error',
            customClass: 'swal-wide',
            /* onOpen:()=>{
                setTimeout(()=>{
                    placeConfetti(20, 50);
                    placeConfetti(50, 500);
                    placeConfetti(166, 39);
                    placeConfetti(100, 500);
                },300)
                    
            } */
        })
 
      } 
      else if (e.detail.score == '100'){
        Swal.fire({
            title: 'Chúc mừng bạn đã quay vào ô số',
            html: ``,
            icon: 'info',
            customClass: 'swal-wide',
            onOpen:()=>{
                setTimeout(()=>{
                    placeConfetti(55, 50);
                    placeConfetti(50, 500);
                    placeConfetti(1000, 39);
                    placeConfetti(850, 500);
                },300)
            }
        })
      }else{
        Swal.fire({
            title: 'Chúc mừng bạn đã quay vào ô số',
            html: `
            <div class="image">
                <img src="../assets/box.png"/>
            </div>
            <div style="color:red;  font-family: 'FS PFBeauSansPro'; font-weight:bold; font-size:135pt; text-align:center">${e.detail.score}</div>
            <div clasa="text-center">
              <p class="font font-size">Vui lòng nhập số điện thoại để nhận mã phần thưởng</p>
            </div>
            <form autocomplete="off">
              <div class="mt-5">
                <input name="phoneNumber" id="phone" class="phone font" type="text" required />
              </div>
            
          </form>
           `,
            icon: '',
            customClass: {
              title:'title',
              contentW:'swal-wide',
          },
          showCancelButton: false,
          confirmButtonText: 'Xác nhận',
          confirmButtonColor:'red',
            showClass: {
              popup: 'animate__animated animate__zoomIn',
            
            },
            hideClass: {
              popup: 'animate__animated animate__zoomOut'
            },
            
            onOpen:()=>{
                setTimeout(()=>{
                    placeConfetti(55, 50);
                    placeConfetti(50, 500);
                    placeConfetti(166, 39);
                    placeConfetti(100, 500);
                },300)
            }
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              html: `
              <div class="image">
                  <img src="../assets/box.png"/>
              </div>
              <div clasa="text-center">
                <p class="font font-size">Mã bí mật để mở tử đã được gửi đến</p>
              </div>
              <div clasa="text-center">
                <p class="font font-size text-bold">0968048661</p>
              </div>
              <div clasa="text-center">
                <p class="font font-size">Vui lòng kiểm tra tin nhắn của bạn</p>
              </div>
              <div clasa="text-center mt-5">
                <p class="font font-size-27"><i>Phiên sẽ tự động kết thúc trong 
                 <span style="color:red;font-weight:bold;"> 00:<b></b></span></i></p>
              </div>
              
             `,
             timer:60000,
              icon: 'success',
              customClass: {
                title:'title',
                contentW:'swal-wide',
            },
            onOpen: () => {
              const b = document.querySelector('b')
              setInterval(() => {
               var totalsecond = Swal.getTimerLeft();
               b.textContent =(totalsecond/1000).toFixed();
              }, 100)
            },
            showCancelButton: false,
            confirmButtonText: 'Đồng ý',
            confirmButtonColor:'red',
              showClass: {
                popup: 'animate__animated animate__zoomIn',
              
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              },
          })
          }
        })
      }
});