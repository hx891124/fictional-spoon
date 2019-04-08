function compressImg(path, obj, cb) {
  let img = new Image();
  img.src = path;
  img.onload = function() {
    // 默认按比例压缩
    let w = img.width,
      h = img.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || w / scale;
    let quality = 0.7; // 默认图片质量为0.7
    //生成canvas
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    // 创建属性节点
    letanw = document.createAttribute('width');
    anw.nodeValue = w;
    let anh = document.createAttribute('height');
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(img, 0, 0, w, h);
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpeg', quality);
    // 回调函数返回base64的值
    if (cb) {
      cb(base64);
    } else {
      return base64;
    }
  };
}

module.exports = compressImg;
