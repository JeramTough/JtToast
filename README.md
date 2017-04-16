# JtToast
#### 用于显示友好的用户提示框


**功能：**
- 在当前屏幕顶部显示信息
![Alt text](https://github.com/JeramTough/JtToast/raw/master/readme_resource/a.png)

- 在当前屏幕底部显示信息
![Alt text](https://github.com/JeramTough/JtToast/raw/master/readme_resource/b.png)

- 元素环绕显示信息
![Alt text](https://github.com/JeramTough/JtToast/raw/master/readme_resource/c.png)

---
#简单用法

- 第一步导入js

```
<script type="text/javascript" src="jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="jtToast.js"></script>
```


- 显示普通信息
```
var toast = new JtToast();//实例化Toast对象
toast.info("普通信息");//显示普通信息
```

- 显示环绕信息

```
 $toast=appendToast($("#"+id+""));  //附加Toast对象
$toast.css("backgroundColor","#0000FF");  //设置Toast内容颜色
$toast.text("100+");    //设置Toast内容显示的文字
```

> > 

---

### **API**


JtToast对象  
用于显示悬浮提示信息  

*1.原点在左上角，设置Toast的坐标*  
*@param x x坐标*  
*@param y y坐标*  
**setPosition** (x, y)


---



