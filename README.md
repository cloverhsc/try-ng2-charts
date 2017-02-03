# 注意事項
 
- 要安裝 chart.js (測試的時候版本為2.4.0)

`
npm install chart.js --save
`

或是寫在package.json裡面再用 yarn 安裝

```
"dependencies":{
  "chart.js": "^2.4.0",
  .....
},

```

- 安裝 ng2-charts (測試的時候版本為1.5.0)
```
npm install ng2-charts --save
```
或是寫在package.json裡面再用 yarn 安裝

```
"dependencies":{
  "ng2-charts": "^1.5.0",
  .....
},
```

---

# Angular2 設定部份
- 由於我是用angular-cli 產生專案( ng new project) 所以在src/app.module.ts內按照 ng2-charts官網的設定如下。
```
import { BrowserModule } from '@angular/platform-browser';
...
...
...
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    .......
    .......
  ],
  imports: [
    ChartsModule,
    ......
    ....
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- 然後在angular-cli.json 要加入 Chart.bundle.js位置:
```
....
"scripts": [
        "../node_modules/chart.js/dist/Chart.bundle.js"
],
...
```

# 架構：
- 主要是用angular-cli 生一個 component 叫做 line-chart 然後在預設的app.component.html加入 line-chart component，產生的line chart程式碼是ng2-charts官網上面的程式碼。主要目的是讓ng2-chart能夠在angular2 專案上面執行。

- ref: [ng2-chart 官網](http://valor-software.com/ng2-charts/#top)
