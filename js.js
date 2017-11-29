setCollegesOptions()

function setDepartmentsOptions(index){
	var departments = new Array();
	departments[0] = ['會計學系 ',' 國際經營與貿易學系' ,' 國際經營與貿易學系國際企業管理全英語學士班' ,' 財稅學系' ,' 合作經濟暨社會事業經營學系' ,' 統計學系 ',' 經濟學系' ,' 企業管理學系' ,' 行銷學系' ,' 國際企業管理學士學位學程(英語專班)' ,' 商學進修學士學位學程' ,'財經法律研究所' ,' 科技管理碩士學位學程' ,' 產業碩士專班' ,' 商學專業碩士在職學位學程' ,'商學博士學位學程 '];
	departments[1] = ['機械與電腦輔助工程學系 ',' 纖維與複合材料學系 ',' 工業工程與系統管理學系 ',' 化學工程學系 ',' 航太與系統工程學系 ',' 精密系統設計學士學位學程 ','電聲碩士學位學程 ',' 綠色能源科技碩士學位學程 ',' 創意設計碩士學位學程 ',' 材料與製造工程碩士在職專班 ',' 智能製造與工程管理碩士在職學位學程 ','機械與航空工程博士學位學程 '];	
	departments[2] = ['土木工程學系 ',' 水利工程與資源保育學系 ',' 都市計畫與空間資訊學系 ',' 運輸與物流學系 ',' 土地管理學系 ','景觀與遊憩碩士學位學程 ',' 專案管理碩士在職學位學程 ',' 建設碩士在職學位學程 ','土木水利工程與建設規劃博士學位學程 '];	
	departments[3] = ['風險管理與保險學系 ',' 財務金融學系 ',' 財務工程與精算學士學位學程 ','金融碩士在職學位學程 ','金融博士學位學程 '];
	departments[4] = ['建築專業學院學士班 ',' 建築學士學位學程 ',' 室內設計學士學位學程 ',' 室內設計進修學士班 ',' 創新設計學士學位學程 ',' 建築碩士學位學程 ',' 建築碩士在職學位學程','澳洲墨爾本皇家理工大學商學與創新雙學士學位學程 ','美國聖荷西州立大學商學大數據分析雙學士學位學程 ']
	departments[5] = ['美國普渡大學電機資訊雙學士學位學程 ','西班牙薩拉戈薩大學物流供應鏈管理與創新創業雙碩士學位學程 ','國際經營管理碩士學位學程 '];
	departments[6] = ['資訊工程學系 ',' 電機工程學系 ',' 電子工程學系 ',' 自動控制工程學系 ',' 通訊工程學系',' 資電不分系榮譽班 ','資訊電機工程碩士在職學位學程 ',' 產業研發碩士專班 ',' 生醫資訊暨生醫工程碩士學位學程 ',' 視光科技碩士在職學位學程 ','電機與通訊工程博士學位學程 ',' 智慧聯網產業博士學位學程'];
	departments[7] = ['中國文學系 ',' 外國語文學系 ','歷史與文物研究所 ',' 公共事務與社會創新研究所 '];
	departments[8] = ['應用數學系 ',' 環境工程與科學學系 ',' 材料科學與工程學系 ',' 光電學系 ','微積分教學中心 ',' 物理教學研究中心 '];
	departments[9] = ['經營管理碩士在職學位學程 ',' 電子商務碩士在職專班 '];
	departments[10] = ['(現無)'];
	departments[11] = ['通識教育中心 ',' 雲端學院 ','外語教學中心 ',' 國語文教學中心 ','全校國際生大一不分系學士班 '];

	var collegeSelect = document.getElementById('college');
	var departmentSelect = document.getElementById('department');
	fill_content(departments[index], departmentSelect);
}

function setCollegesOptions() {
	var colleges = ['商學院', '工學院', '建設學院', '金融學院', '建築專業學院', '國際科技與管理學院', '資電學院', '人文社會學院', '理學院', '經營管理學院', '跨領域設計學院', '跨科系學習'];
	var collegeSelect = document.getElementById('college');
	fill_content(colleges, collegeSelect);
	setDepartmentsOptions(0);
}

function fill_content(array, select) {
	var optionFormat = '<option value="';
	var optionFormatContent = '">';
	var option = '';
	for (var i = 0; i < array.length; i++) {
		option += optionFormat + array[i] + optionFormatContent + array[i];
	}
	select.innerHTML = option;
}