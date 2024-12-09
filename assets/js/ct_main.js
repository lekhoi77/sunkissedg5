window.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.sunkissed_hero');
  const cans = document.querySelectorAll('.can');
  const heroRect = heroSection.getBoundingClientRect();
  const scrollPosition = window.scrollY;

  // Kiểm tra nếu khu vực hero vẫn còn trong viewport
  if (heroRect.top <= window.innerHeight && heroRect.bottom >= 0) {
      const relativeScroll = scrollPosition - heroSection.offsetTop;

      // Tùy chỉnh sự chuyển động của từng lon
      cans.forEach((can) => {
          let translateX = 0;
          let translateY = 0;
          let rotate = 0;

          // Tùy chỉnh sự chuyển động của từng lon
          if (can.classList.contains('loncaphe')) {
              translateX = relativeScroll * 0.05;
              translateY = relativeScroll * 0.1;
              rotate = -10;
          } else if (can.classList.contains('loncam')) {
              translateX = relativeScroll * -0.05;
              translateY = relativeScroll * 0.05;
              rotate = 10;
          } else if (can.classList.contains('lonchanh')) {
              translateX = relativeScroll * 0.1;
              translateY = relativeScroll * 0.05;
              rotate = 20;
          } else if (can.classList.contains('lonvq')) {
              translateX = relativeScroll * -0.15;
              translateY = relativeScroll * 0.02;
              rotate = 20; 
          } else if (can.classList.contains('londuahau')) {
              translateX = relativeScroll * 0.15;
              translateY = relativeScroll * 0.02;
              rotate = -10;
          }

          // Di chuyển và xoay lon
          can.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
      });
  } else {
      // Giữ nguyên vị trí mới khi ra khỏi khu vực hero
      cans.forEach(can => {
          const computedStyle = window.getComputedStyle(can);
          const matrix = new WebKitCSSMatrix(computedStyle.transform);
          can.dataset.translateX = matrix.m41;
          can.dataset.translateY = matrix.m42;
          can.dataset.rotate = matrix.a; // Lưu giá trị xoay hiện tại
      });
  }

  // Thêm đoạn mã mới cho section .brandintro
  const brandIntro = document.querySelector('.brandintro');
  const leftHand = document.querySelector('.left-hand');
  const rightHand = document.querySelector('.right-hand');
  const text = document.querySelector('.brandintro .text');
  const imageNoColor = document.querySelector('.image-no-color');
  const brandIntroPosition = brandIntro.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (brandIntroPosition < screenPosition) {
      if (!leftHand.classList.contains('moved') && !rightHand.classList.contains('moved')) {
          leftHand.style.transform = 'translateX(-37px) rotate(10deg)'; // Thêm hiệu ứng phóng to
          rightHand.style.transform = 'translateX(35px) rotate(-10deg)'; // Thêm hiệu ứng phóng to
          leftHand.classList.add('moved');
          rightHand.classList.add('moved');
      }
      // Di chuyển đoạn text lên trên
      text.style.transform = 'translateY(-100px)';
      // Di chuyển hình ảnh lên trên
      imageNoColor.style.transform = 'translateY(-40px)';
  } else {
      // Di chuyển tay trở lại vị trí ban đầu khi cuộn lên
      if (leftHand.classList.contains('moved') && rightHand.classList.contains('moved')) {
          leftHand.style.transform = 'translateX(-150px) rotate(0deg)';
          rightHand.style.transform = 'translateX(120px) rotate(0deg)';
          leftHand.classList.remove('moved');
          rightHand.classList.remove('moved');
      }
      // Đưa đoạn text trở lại vị trí ban đầu
      text.style.transform = 'translateY(-120px)';
      // Đưa hình ảnh trở lại vị trí ban đầu
      imageNoColor.style.transform = 'translateY(110px)';
  }

  // Thêm đoạn mã mới cho section .spnb
  const spnbSection = document.querySelector('.spnb');
  const canNames = document.querySelectorAll('.can_name');
  const spnbRect = spnbSection.getBoundingClientRect();

  if (spnbRect.top <= window.innerHeight / 4 && spnbRect.bottom >= 0) {
      // Hiện tên sản phẩm khi cuộn đến một nửa section .spnb
      canNames.forEach(canName => {
          canName.style.opacity = '1';
          canName.style.transform = 'translateY(0)';
      });
  }
});
