import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-sabun',
  templateUrl: './sabun.component.html',
  styleUrls: ['./sabun.component.scss']
})
export class SabunComponent {
  ngOnInit() {
    this.initialize();
  }

  initialize() {
    const bmstableContent = $("meta[name=bmstable]").attr("content");
    if (typeof bmstableContent === "string") {
        $.getJSON(bmstableContent, function (header) {
            $.getJSON(header.data_url, function (information) {
                makeBMSTable(information, header.symbol);
            });
        });
    }
  }


}

function makeBMSTable(info: string | any[], mark: string) {
    console.log("is called")
    var x = "";
    var ev = "";
    var count = 0;
    var obj = $("#table_int");
    // 表のクリア
    obj.html("");
    $("<tr height='20' style='color:white;background-color:#666666'><td align='center'>LV</td><td align='center'>曲名</td><td align='center'>差分DL</td><td align='center'>本体</td><td align='center'>オススメ度</td><td align='center'>コメント</td></tr>").appendTo(obj);
    var obj_sep = null;
    for (var i = 0; i < info.length; i++) {
        // 本文
        var str = $("<tr class='tr_normal'></tr>");
        if (info[i].state == 1) {
            str = $("<tr class='tr_new'></tr>");
        }
        if (info[i].state == 2) {
            str = $("<tr class='tr_update'></tr>");
        }
        // レベル表記
        $("<td style='background-color: #000000ee; z-index: 11;' width='5%' align='center'>" + info[i].level + "</td>").appendTo(str);

        // タイトル(IR)
        $("<td style='background-color: #000000ee; z-index: 11;' width='25%'>" + "<a href='http://www.dream-pro.info/~lavalse/LR2IR/search.cgi?mode=ranking&bmsmd5=" + info[i].md5 + "' target='_blank'>" + info[i].title + "</a></td>").appendTo(str);

        // 差分
        $("<td style='background-color: #000000ee; z-index: 11;' width='15%'><a href='" + info[i].url_diff + "'>" + info[i].sabun + "</a></td>").appendTo(str);

        // 本体URL
        $("<td style='background-color: #000000ee; z-index: 11;' width='20%'>" + "<a href='" + info[i].url_orig + "'>" + info[i].artist + "</a>" + "</td>").appendTo(str);

        // オススメ度
        $("<td style='background-color: #000000ee; z-index: 11;' width='5%' align='center'>" + info[i].recommend + "</td>").appendTo(str);
        str.appendTo(obj);
        count++;

        // コメント
        $("<td style='background-color: #000000ee; z-index: 11;' width='15%'>" + info[i].comment + "</td>").appendTo(str);
        str.appendTo(obj);
        count++;
    }
}
