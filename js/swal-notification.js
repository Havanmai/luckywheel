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
      } else if ((e.detail.score == 0)||(e.detail.score == '099')||(e.detail.score == '199')||(e.detail.score == '299')){
        Swal.fire({
          title: 'Chúc bạn may mắn lần sau',
          html: `
          <div class="image-lost">
              <img src="assets/lost.png"/>
          </div>
         `,
          customClass: {
            title:'title',
            contentW:'swal-wide',
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
          
        /*   onOpen:()=>{
              setTimeout(()=>{
                  placeConfetti(55, 50);
                  placeConfetti(50, 500);
                  placeConfetti(166, 39);
                  placeConfetti(100, 500);
              },300)
          } */
      })
 
      } 
      else if ((e.detail.score == '0100')||(e.detail.score == '1100')||(e.detail.score == '2100')){
        Swal.fire({
          title: 'Chúc mừng bạn đã nhận được thêm một lượt quay nữa',
          html: `
          <div class="image">
              <img src="assets/box.png"/>
          </div>
         `,
          icon: 'success',
          customClass: {
            title:'title',
            contentW:'swal-wide',
        },
        showCancelButton: false,
        confirmButtonText: 'Tiếp tục',
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
      })
      }else{
        Swal.fire({
            title: 'Chúc mừng bạn đã quay vào ô số',
            html: `
            <div class="image">
                <img src="assets/box.png"/>
            </div>
            <div style="color:red;  font-family: 'FS PFBeauSansPro'; font-weight:bold; font-size:11em; margin-top: -40px; text-align:center">${e.detail.score}</div>
            <div clasa="text-center">
              <p class="font font-size" style=" width: 70%; margin: auto;" >Vui lòng nhập số điện thoại để nhận mã phần thưởng</p>
            </div>
           `,
           input: 'number',
           inputPlaceholder:'Nhập số điện thoại',
            inputAttributes: {
              autocapitalize: 'off',
            },
            icon: '',
            customClass: {
              title:'title',
              contentW:'swal-wide',
              input:'phone',
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
            }, 
            inputValidator: (value) => {
              return new Promise((resolve) => {
                var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if ((!value)) 
                {
                  resolve('Vui lòng nhập số điện thoại trước khi tiếp tục!')
                }else if((!vnf_regex.test(value))){
                  resolve('Số điện thoại sai, vui lòng nhập lại !')
                }
                else{
                  resolve()
                }
              })
            },
          }).then((result) => {
          if (result.isConfirmed) {
            if (result.value) {
              $.ajax({
                url: " https://box-api-dev.viettelpost.vn/services/smartlocker-order/api/public/gifts/gen-new",
                headers: {
                  'Content-Type':'application/json'
               },
                type: 'POST',
                crossDomain: true,
                json:"callback",            
                data:JSON.stringify({
                  "phoneNumber": result.value,
                  "position": Number(e.detail.score)
                }),
                success: function (data) {
                  if(data.error==0){
                    Swal.fire({
                      html: `
                      <div class="image">
                          <img src="assets/box.png"/>
                      </div>
                      <div clasa="text-center">
                        <p class="font font-size">Mã bí mật để mở tử đã được gửi đến</p>
                      </div>
                      <div clasa="text-center">
                        <p class="font font-size text-bold">${result.value}</p>
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
                  }else{
                    Swal.fire({
                      title: data.message,
                      html: `
                      <div class="image-lost">
                          <img src="assets/lost.png"/>
                      </div>
                     `,
                      customClass: {
                        title:'title',
                        contentW:'swal-wide',
                    },
                    showCancelButton: false,
                    confirmButtonText: 'Đóng',
                    confirmButtonColor:'red',
                      showClass: {
                        popup: 'animate__animated animate__zoomIn',
                      
                      },
                      hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                      },
                    }
                    )
                  }
                 
                },
                error: function (xhr, ajaxOptions, thrownError) {
                  Swal.fire({
                    title: 'Số điện thoại đã hết lượt nhận quà !',
                    html: `
                    <div class="image-lost">
                        <img src="assets/lost.png"/>
                    </div>
                   `,
                    customClass: {
                      title:'title',
                      contentW:'swal-wide',
                  },
                  showCancelButton: false,
                  confirmButtonText: 'Đóng',
                  confirmButtonColor:'red',
                    showClass: {
                      popup: 'animate__animated animate__zoomIn',
                    
                    },
                    hideClass: {
                      popup: 'animate__animated animate__zoomOut'
                    },
                  }
                  )
                }
            });
              
            
            }
          }
        })
      }
});