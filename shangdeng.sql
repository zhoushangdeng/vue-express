/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : shangdeng

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 30/10/2021 17:09:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `menusName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `path` varchar(255) NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `parentID` int unsigned NOT NULL DEFAULT '1',
  `type` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of menus
-- ----------------------------
BEGIN;
INSERT INTO `menus` VALUES (2, '系统管理123', 'system', 'system', 'el-icon-user', 0, 1);
INSERT INTO `menus` VALUES (3, '菜单设置', 'menus', 'system/menus', 'el-icon-s-promotion', 2, 1);
INSERT INTO `menus` VALUES (4, '人员管理', 'user', 'system/user', 'el-icon-user', 2, 1);
INSERT INTO `menus` VALUES (45, '评审审核', 'sehnhe', 'src/asdfasdf', 'el-icon-user', 39, 1);
INSERT INTO `menus` VALUES (46, '表单设置', 'co', 'system/co', 'el-icon-s-promotion', 2, 1);
INSERT INTO `menus` VALUES (47, '角色管理', 'role', 'system/role', 'el-icon-user', 2, 1);
INSERT INTO `menus` VALUES (48, '会议管理', 'managementMeetings', 'managementMeetings', 'el-icon-user', 0, 1);
INSERT INTO `menus` VALUES (49, '我的会议', 'meetingMy', 'meetingMy', 'el-icon-user', 48, 1);
INSERT INTO `menus` VALUES (50, '会议签到', 'meetingSign', 'meetingSign', 'el-icon-user', 48, 1);
INSERT INTO `menus` VALUES (51, '会议管理', 'management', 'management', 'el-icon-user', 48, 1);
INSERT INTO `menus` VALUES (52, '订单管理', 'orderNo', 'order', 'el-icon-user', 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for menus_type
-- ----------------------------
DROP TABLE IF EXISTS `menus_type`;
CREATE TABLE `menus_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `c_prod_no` varchar(255) NOT NULL,
  `c_prod_name` varchar(255) DEFAULT NULL,
  `c_ori_prod_no` varchar(255) DEFAULT NULL,
  `platform_prodcode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_prod_no`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of test
-- ----------------------------
BEGIN;
INSERT INTO `test` VALUES ('01001', '财产险基本险', 'HQB00', '02000');
INSERT INTO `test` VALUES ('01002', '财产险基本险[免增值税]', 'HQB02', '02000');
INSERT INTO `test` VALUES ('01003', '财产一切险', 'HQC00', '02000');
INSERT INTO `test` VALUES ('01004', '财产一切险', 'HQC01', '02000');
INSERT INTO `test` VALUES ('01005', '财产一切险[免增值税]', 'HQC02', '02000');
INSERT INTO `test` VALUES ('01006', '财产综合险', 'HQD00', '02000');
INSERT INTO `test` VALUES ('01008', '财产综合险[免增值税]', 'HQD02', '02000');
INSERT INTO `test` VALUES ('01009', '财产保险', 'HQA00', '02000');
INSERT INTO `test` VALUES ('01010', '锅炉压力容器保险', 'HQE00', '02000');
INSERT INTO `test` VALUES ('01011', '机器损坏保险', 'HQF00', '02000');
INSERT INTO `test` VALUES ('01012', '机器损坏保险[免增值税]', 'HQF02', '02000');
INSERT INTO `test` VALUES ('01013', '利润损失保险', 'HQG00', '02000');
INSERT INTO `test` VALUES ('01017', '工程机械保险', 'HQK00', '02000');
INSERT INTO `test` VALUES ('01018', '营业中断保险', 'HQL00', '02000');
INSERT INTO `test` VALUES ('01019', '营业中断保险[免增值税]', 'HQL02', '2000');
INSERT INTO `test` VALUES ('01028', '众商通中小企业综合保险A款', 'HQW00', '02000');
INSERT INTO `test` VALUES ('01029', '众商通中小企业综合保险B款', 'HQW01', '02000');
INSERT INTO `test` VALUES ('01030', '工程机械保险一切险', 'HQX00', '02000');
INSERT INTO `test` VALUES ('01031', '竹木保中小企业综合保险', 'HQY00', '02000');
INSERT INTO `test` VALUES ('01032', '物质损失或损害保险', 'HQZ00', '02000');
INSERT INTO `test` VALUES ('01034', '现金保险', 'HTB00', '02000');
INSERT INTO `test` VALUES ('01038', '工程机械综合保险', 'HTI00', '02000');
INSERT INTO `test` VALUES ('02002', '进口货物运输保险', 'SHA02', '04000');
INSERT INTO `test` VALUES ('02003', '进口货物运输保险[免增值税]', 'SHA03', '04000');
INSERT INTO `test` VALUES ('02005', '出口货物运输保险', 'SHB02', '04000');
INSERT INTO `test` VALUES ('02007', '国内航空运输保险', 'SHC02', '04000');
INSERT INTO `test` VALUES ('02009', '国内水路运输保险', 'SHD02', '04000');
INSERT INTO `test` VALUES ('02010', '国内水路、陆路货物运输保险（陆路）', 'SHE00', '04000');
INSERT INTO `test` VALUES ('02012', '国内陆路运输保险', 'SHE02', '04000');
INSERT INTO `test` VALUES ('02013', '进口运输保险(海运--集装箱运输)', 'SHG00', '04000');
INSERT INTO `test` VALUES ('02016', '进口货运预约险（海运-非集装箱运输）', 'SHH01', '04000');
INSERT INTO `test` VALUES ('02017', '物流责任保险', 'SHI00', '04000');
INSERT INTO `test` VALUES ('02018', '物流责任保险', 'SHI01', '04000');
INSERT INTO `test` VALUES ('02019', '机动车辆（船舶）承运货物责任保险', 'SHJ00', '04000');
INSERT INTO `test` VALUES ('02020', '道路危险货物承运人责任保险', 'SHM00', '04000');
INSERT INTO `test` VALUES ('02021', '集装箱箱体保险', 'SHN00', '04000');
INSERT INTO `test` VALUES ('02022', '码头责任保险', 'SHO00', '04000');
INSERT INTO `test` VALUES ('02023', '公路货物运输承运人责任保险', 'SHS00', '04000');
INSERT INTO `test` VALUES ('02024', '水路货物运输承运人责任保险(定期保险)', 'SHT00', '04000');
INSERT INTO `test` VALUES ('02025', '水路货物运输承运人责任保险(运次保险)', 'SHT01', '04000');
INSERT INTO `test` VALUES ('02026', '进口运输保险', 'SHA00', '04000');
INSERT INTO `test` VALUES ('02027', '出口运输保险', 'SHB00', '04000');
INSERT INTO `test` VALUES ('02028', '国内航空货物运输保险', 'SHC00', '04000');
INSERT INTO `test` VALUES ('02029', '国内水路、陆路货运保险(水路)', 'SHD00', '04000');
INSERT INTO `test` VALUES ('03001', '抵押商品住宅保险', 'HFA00', '03000');
INSERT INTO `test` VALUES ('03002', '个人住房抵押贷款综合保险', 'HFB00', '03000');
INSERT INTO `test` VALUES ('03003', '上海个人抵押住房综合保险', 'HFC00', '03000');
INSERT INTO `test` VALUES ('03004', '抵押房屋保险', 'HFD00', '03000');
INSERT INTO `test` VALUES ('03005', '个人抵押房屋综合保险', 'HFE00', '03000');
INSERT INTO `test` VALUES ('04001', '公众责任保险', 'ZAA00', '11100');
INSERT INTO `test` VALUES ('04002', '公众责任保险【免增值税】', 'ZAA01', '11100');
INSERT INTO `test` VALUES ('04003', '公众责任保险【工程能源类】', 'ZAA02', '11100');
INSERT INTO `test` VALUES ('04004', '产品责任保险', 'ZAC00', '11200');
INSERT INTO `test` VALUES ('04005', '产品责任保险（销往北美地区）', 'ZAD00', '11200');
INSERT INTO `test` VALUES ('04006', '产品责任保险（销往北美地区）【免增值税】', 'ZAD01', '11200');
INSERT INTO `test` VALUES ('04007', '产品责任保险（销往北美以外地区）', 'ZAE00', '11200');
INSERT INTO `test` VALUES ('04008', '产品责任保险（销往北美以外地区）【免增值税】', 'ZAE01', '11200');
INSERT INTO `test` VALUES ('04009', '产品质量综合保险（境内）', 'ZAF00', '11200');
INSERT INTO `test` VALUES ('04010', '产品质量综合保险(销往北美地区)', 'ZAG00', '11200');
INSERT INTO `test` VALUES ('04011', '产品质量综合保险(销往北美以外地区)', 'ZAH00', '11200');
INSERT INTO `test` VALUES ('04012', '雇主责任保险（A款）', 'ZAI00', '11300');
INSERT INTO `test` VALUES ('04013', '雇主责任险（附加疾病医药费）', 'ZAJ00', '11300');
INSERT INTO `test` VALUES ('04015', '展览会责任保险', 'ZAL00', '11199');
INSERT INTO `test` VALUES ('04016', '旅行社责任保险', 'ZAM00', '11113');
INSERT INTO `test` VALUES ('04018', '助动车第三者责任保险', 'ZAO00', '11114');
INSERT INTO `test` VALUES ('04020', '执业医师职业责任保险', 'ZAQ00', '11499');
INSERT INTO `test` VALUES ('04023', '注册会计师执业责任保险', 'ZAU00', '11420');
INSERT INTO `test` VALUES ('04027', '校(园)方责任保险', 'ZAY00', '11108');
INSERT INTO `test` VALUES ('04029', '特种设备第三者责任保险', 'ZBB00', '11114');
INSERT INTO `test` VALUES ('04032', '承运人旅客责任保险', 'ZBD00', '11103');
INSERT INTO `test` VALUES ('04035', '道路客运承运人责任保险', 'ZBG00', '11103');
INSERT INTO `test` VALUES ('04037', '火灾公众责任险', 'ZBI01', '11101');
INSERT INTO `test` VALUES ('04039', '团体补充工伤保险', 'ZBK00', '11330');
INSERT INTO `test` VALUES ('04041', '单一项目职业责任保险', 'ZBM00', '11440');
INSERT INTO `test` VALUES ('04042', '单一项目职业责任保险[免增值税]', 'ZBM01', '11440');
INSERT INTO `test` VALUES ('04043', '医疗机构责任保险', 'ZBN00', '11410');
INSERT INTO `test` VALUES ('04045', '雇主责任保险（B款）', 'ZBQ00', '11300');
INSERT INTO `test` VALUES ('04046', '雇主责任险B款[免增值税]', 'ZBQ01', '11300');
INSERT INTO `test` VALUES ('04047', '雇主责任保险 (B款) - 附加救援', 'ZBQ02', '11300');
INSERT INTO `test` VALUES ('04048', '雇主责任险（B款）', 'ZBQ03', '11300');
INSERT INTO `test` VALUES ('04052', '工程机械综合责任保险', 'ZCB00', '11114');
INSERT INTO `test` VALUES ('04053', '董监事及高级管理人员责任险', 'ZCH00', '11430');
INSERT INTO `test` VALUES ('04056', '生命科学产品临床试验责任保险', 'ZCK00', '11299');
INSERT INTO `test` VALUES ('04060', '商业综合责任保险', 'ZCO00', '11299');
INSERT INTO `test` VALUES ('04061', '商业综合责任保险[免增值税]', 'ZCO01', '11299');
INSERT INTO `test` VALUES ('04062', '商业综合责任保险[工程能源类]', 'ZCO02', '11199');
INSERT INTO `test` VALUES ('04063', '职业责任（通用）保险', 'ZCP00', '11400');
INSERT INTO `test` VALUES ('04064', '公司绑架勒索保险', 'ZCQ00', '11900');
INSERT INTO `test` VALUES ('04065', '家庭绑架勒索保险', 'ZCQ01', '11900');
INSERT INTO `test` VALUES ('04066', '商业综合责任保险[工程能源类 免增值税]', 'ZAC02', '11199');
INSERT INTO `test` VALUES ('04067', '生命科学责任保险', 'ZNA00', '11900');
INSERT INTO `test` VALUES ('04068', '超额责任保险', 'ZNB00', '11900');
INSERT INTO `test` VALUES ('04069', '职业责任险（通用）超额保险', 'ZNC00', '11900');
INSERT INTO `test` VALUES ('04070', '招股说明书责任保险', 'ZND00', '11900');
INSERT INTO `test` VALUES ('04071', '生命科学责任保险[免增值税]', 'ZNA01', '11900');
INSERT INTO `test` VALUES ('04072', '首台（套）重大技术装备综合保险', 'ZAC01', '11230');
INSERT INTO `test` VALUES ('04073', '超额责任保险B款', 'ZNB01', '11900');
INSERT INTO `test` VALUES ('04075', '补充工伤责任保险', 'ZNE00', '11330');
INSERT INTO `test` VALUES ('04076', '商业综合责任保险-亚马逊', 'ZCO04', '11299');
INSERT INTO `test` VALUES ('05001', '家庭室内装潢工程保险', 'HJA00', '03000');
INSERT INTO `test` VALUES ('05002', '家庭财产综合保险', 'HJB00', '03000');
INSERT INTO `test` VALUES ('05003', '家庭财产保险', 'HJC00', '03000');
INSERT INTO `test` VALUES ('05004', '家庭财产保险', 'HJC01', '03000');
INSERT INTO `test` VALUES ('05005', '家庭财产保险', 'HJC05', '03000');
INSERT INTO `test` VALUES ('05006', '家庭责任保险', 'HJD00', '03000');
INSERT INTO `test` VALUES ('05007', '家庭财产保险', 'HJE00', '03000');
INSERT INTO `test` VALUES ('05008', '家庭财产保险', 'HJF00', '03000');
INSERT INTO `test` VALUES ('05009', '家庭责任保险', 'HJG00', '03000');
INSERT INTO `test` VALUES ('05010', '个人手机支付账户盗窃保险', 'HJO00', '03000');
INSERT INTO `test` VALUES ('06001', '个人重大疾病保险', 'JAC00', '15212');
INSERT INTO `test` VALUES ('06004', '钟爱一生至祥个人全球医疗保险', 'JAH00', '15110');
INSERT INTO `test` VALUES ('06005', '城镇职工补充医疗保险', 'JTC00', '15110');
INSERT INTO `test` VALUES ('06013', '安享尊荣健康团体医疗保险', 'JTF00', '15110');
INSERT INTO `test` VALUES ('07001', '借款人意外伤害保险A款', 'YBS01', '16000');
INSERT INTO `test` VALUES ('07002', '借款人意外伤害保险B款', 'YBU00', '16000');
INSERT INTO `test` VALUES ('07003', '借款人意外伤害保险（C款）', 'YCG00', '16000');
INSERT INTO `test` VALUES ('07004', '个人旅行人身意外伤害保险', 'YDA02', '16000');
INSERT INTO `test` VALUES ('07005', '个人旅行险（2015版）', 'YDA05', '16000');
INSERT INTO `test` VALUES ('07006', '个人公共交通工具意外伤害保险', 'YDB01', '16000');
INSERT INTO `test` VALUES ('07008', '航空意外伤害保险', 'YDD01', '16000');
INSERT INTO `test` VALUES ('07009', '非移民类签证拒签保险', 'YDF00', '99000');
INSERT INTO `test` VALUES ('07010', '公路旅客意外险（2014版）', 'YDG00', '16000');
INSERT INTO `test` VALUES ('07011', '旅游景点（娱乐场所）游客人身意外保险2014', 'YDH00', '16000');
INSERT INTO `test` VALUES ('07012', '住宿旅客人身意外伤害保险2014', 'YDI00', '16000');
INSERT INTO `test` VALUES ('07013', '个人人身意外伤害保险（2018）', 'YHA01', '16000');
INSERT INTO `test` VALUES ('07014', '驾乘人员意外伤害保险', 'YHB01', '16000');
INSERT INTO `test` VALUES ('07015', '驾乘人员意外伤害保险(2014版)', 'YHB05', '16000');
INSERT INTO `test` VALUES ('07016', '个人人身意外伤害保险(2014版)', 'YHD01', '16000');
INSERT INTO `test` VALUES ('07017', '出国人员意外伤害保险(2014版)', 'YHE00', '16000');
INSERT INTO `test` VALUES ('07018', '驾驶学员意外险（2014版）', 'YHF00', '16000');
INSERT INTO `test` VALUES ('07019', '学生幼儿短期意外伤害保险(2014版)', 'YHG00', '16000');
INSERT INTO `test` VALUES ('07020', '学生幼儿短期意外伤害保险', 'YHG01', '16000');
INSERT INTO `test` VALUES ('07021', '个人意外身故保险', 'YHH00', '16000');
INSERT INTO `test` VALUES ('07022', '燃气人身意外伤害保险', 'YHI00', '16000');
INSERT INTO `test` VALUES ('07023', '手术意外伤害保险', 'YHJ00', '16000');
INSERT INTO `test` VALUES ('07024', '个人人身意外伤害保险（2014版）', 'YIA00', '16000');
INSERT INTO `test` VALUES ('07025', '航空机票取消保险', 'YQD00', '99000');
INSERT INTO `test` VALUES ('07026', '航班延误保险A款', 'YQE00', '11840');
INSERT INTO `test` VALUES ('07027', '航班延误保险(2013版)', 'YQF00', '11840');
INSERT INTO `test` VALUES ('07028', '航班延误保险B款', 'YQG00', '11840');
INSERT INTO `test` VALUES ('07029', '航班取消保险条款', 'YQH00', '99000');
INSERT INTO `test` VALUES ('07030', '航空机票退票损失补偿保险条款', 'YQI00', '99000');
INSERT INTO `test` VALUES ('07031', '酒店取消损失补偿保险', 'YQK00', '99000');
INSERT INTO `test` VALUES ('07032', '酒店取消损失补偿保险(B款)', 'YQK01', '99000');
INSERT INTO `test` VALUES ('07033', '建筑施工人员团体意外', 'YTA00', '16000');
INSERT INTO `test` VALUES ('07034', '团体公共交通工具意外伤害', 'YTI01', '16000');
INSERT INTO `test` VALUES ('07035', '团体旅行人身意外伤害（2015-02版）', 'YUA01', '16000');
INSERT INTO `test` VALUES ('07036', '团体旅行人身意外伤害保险(2015版)B款', 'YUA02', '16000');
INSERT INTO `test` VALUES ('07037', '团体意外伤害保险（2015版）', 'YXA01', '16000');
INSERT INTO `test` VALUES ('07038', '团体意外伤害保险(2015版)(B款)', 'YXA02', '16000');
INSERT INTO `test` VALUES ('07039', '团体意外伤害保险（2015版）[免增值税]', 'YXA03', '16000');
INSERT INTO `test` VALUES ('07040', '海外派遣员工团体人身意外伤害保险2015版', 'YXB01', '16000');
INSERT INTO `test` VALUES ('07041', '海外派遣团体人身意外伤害保险(B款)(2015款)', 'YXB02', '16000');
INSERT INTO `test` VALUES ('07042', '海外派遣团体人身意外（2015-02版）', 'YXB05', '16000');
INSERT INTO `test` VALUES ('07043', '海外派遣员工团体意外伤害保险(免税)', 'YXB06', '16000');
INSERT INTO `test` VALUES ('07044', '借款人意外伤害保险A款', 'YXD00', '16000');
INSERT INTO `test` VALUES ('07045', '家政人员团体意外', 'YXE00', '16000');
INSERT INTO `test` VALUES ('07051', '个人人身意外伤害保险', 'YBE00', '16000');
INSERT INTO `test` VALUES ('07052', '个人人身意外伤害保险', 'YBE02', '16000');
INSERT INTO `test` VALUES ('07053', '个人人身意外伤害保险', 'YBE03', '16000');
INSERT INTO `test` VALUES ('07054', '个人人身意外伤害保险', 'YBE04', '16000');
INSERT INTO `test` VALUES ('07055', '个人人身意外伤害保险', 'YBE05', '16000');
INSERT INTO `test` VALUES ('07056', '出国人员人身意外伤害保险', 'YBF00', '16000');
INSERT INTO `test` VALUES ('07061', '学生幼儿短期意外伤害保险', 'YBJ00', '16000');
INSERT INTO `test` VALUES ('07062', '个人人身意外伤害保险', 'YBJ01', '16000');
INSERT INTO `test` VALUES ('07063', '个人旅行人身意外伤害保险', 'YBK00', '16000');
INSERT INTO `test` VALUES ('07071', '借款人意外伤害保险', 'YBS00', '16000');
INSERT INTO `test` VALUES ('07075', '个人旅行人身意外伤害保险', 'YBX00', '16000');
INSERT INTO `test` VALUES ('07078', '个人旅行人身意外伤害保险', 'YBX03', '16000');
INSERT INTO `test` VALUES ('07084', '登山及户外运动天涯行个人人身意外伤害保险', 'YCD00', '16000');
INSERT INTO `test` VALUES ('07085', '航班延误保险', 'YCE00', '11840');
INSERT INTO `test` VALUES ('07088', '个人旅行人身意外伤害保险', 'YDA00', '16000');
INSERT INTO `test` VALUES ('07089', '个人旅行人身意外伤害保险(2013版)', 'YDA01', '16000');
INSERT INTO `test` VALUES ('07090', '个人公共交通工具意外伤害保险', 'YDB00', '16000');
INSERT INTO `test` VALUES ('07091', '邮轮旅行人身意外伤害保险', 'YDC00', '16000');
INSERT INTO `test` VALUES ('07092', '航空意外伤害保险(2012版)', 'YDD00', '16000');
INSERT INTO `test` VALUES ('07093', '个人户外运动及业余体育活动人身意外伤害保险', 'YDE00', '16000');
INSERT INTO `test` VALUES ('07094', '个人人身意外伤害保险(2013版)', 'YHA00', '16000');
INSERT INTO `test` VALUES ('07095', '驾乘人员安全驾驶意外伤害保险', 'YHB00', '16000');
INSERT INTO `test` VALUES ('07096', '境外居留人员人身意外伤害保险', 'YHC00', '16000');
INSERT INTO `test` VALUES ('07097', '个人人身意外伤害保险（2013）', 'YHD00', '16000');
INSERT INTO `test` VALUES ('07098', '大众行-交通工具年度意外伤害保险', 'YQC00', '16000');
INSERT INTO `test` VALUES ('07099', '建筑工程施工人员团体短期意外伤害保险', 'YTA01', '16000');
INSERT INTO `test` VALUES ('07100', '建筑工程施工人员团体短期意外伤害保险', 'YTA02', '16000');
INSERT INTO `test` VALUES ('07102', '团体意外伤害保险', 'YTB00', '16000');
INSERT INTO `test` VALUES ('07106', '团体旅行人身意外伤害保险', 'YTG00', '16000');
INSERT INTO `test` VALUES ('07107', '团体意外伤害保险(2012版)', 'YTH00', '16000');
INSERT INTO `test` VALUES ('07108', '团体人身意外伤害保险（2012版）', 'YTH01', '16000');
INSERT INTO `test` VALUES ('07110', '团体公共交通工具意外伤害保险', 'YTI00', '16000');
INSERT INTO `test` VALUES ('07111', '海外派遣员工团体人身意外伤害保险', 'YTK00', '16000');
INSERT INTO `test` VALUES ('07112', '团体旅行人身意外伤害保险', 'YUA00', '16000');
INSERT INTO `test` VALUES ('07113', '团体意外伤害保险（2012版）', 'YXA00', '16000');
INSERT INTO `test` VALUES ('07114', '海外派遣员工团体人身意外伤害保险', 'YXB00', '16000');
INSERT INTO `test` VALUES ('07115', '海外派遣团体人身意外（2019版）', 'YXB10', '16000');
INSERT INTO `test` VALUES ('07116', '建筑施工人员团体意外（2020版）[免增值税]', 'YTA04', '16000');
INSERT INTO `test` VALUES ('07117', '团体意外伤害保险（2020版）', 'YXA10', '16000');
INSERT INTO `test` VALUES ('07118', '建筑施工人员团体意外（2020版）', 'YTA10', '16000');
INSERT INTO `test` VALUES ('07119', '个人人身意外伤害保险(共享)', 'YHA20', '16000');
INSERT INTO `test` VALUES ('07120', '团体意外伤害保险（2020版）[免增值税]', 'YXA11', '16000');
INSERT INTO `test` VALUES ('07121', '个人人身意外伤害保险（2020版）', 'YHA02', '16000');
INSERT INTO `test` VALUES ('07122', '海外派遣团体意外伤害保险（2019版）[免增值税]', 'YXB11', '16000');
INSERT INTO `test` VALUES ('07132', '团体旅行人身意外伤害（2015-02版）[免增值税]', 'YUA03', '16000');
INSERT INTO `test` VALUES ('08001', '建筑工程一切险', 'HGA00', '06000');
INSERT INTO `test` VALUES ('08002', '建筑工程一切险', 'HGA01', '06000');
INSERT INTO `test` VALUES ('08003', '建筑工程一切险（免增值税）', 'HGA02', '06000');
INSERT INTO `test` VALUES ('08004', '建筑工程一切险(市政工程)', 'HGB00', '06000');
INSERT INTO `test` VALUES ('08005', '建筑工程一切险(市政工程)[免增值税]', 'HGB02', '06000');
INSERT INTO `test` VALUES ('08006', '安装工程一切险', 'HGC00', '06000');
INSERT INTO `test` VALUES ('08007', '安装工程一切险[免增值税]', 'HGC02', '06000');
INSERT INTO `test` VALUES ('08008', '建房保险', 'HGD00', '06000');
INSERT INTO `test` VALUES ('08009', '安装工程一切险（2020版）', 'HGC10', '06000');
INSERT INTO `test` VALUES ('10001', '卫星发射及在轨保险', 'TAD00', '08200');
INSERT INTO `test` VALUES ('10002', '卫星发射及在轨保险[免增值税]', 'TAD01', '08200');
INSERT INTO `test` VALUES ('10003', '石油开发保险', 'TAE00', '08300');
INSERT INTO `test` VALUES ('10004', '核电保险', 'TAF00', '08400');
INSERT INTO `test` VALUES ('10005', '核电保险[免增值税]', 'TAF01', '08400');
INSERT INTO `test` VALUES ('10006', '航空器机身一切险及责任险', 'TAG00', '08100');
INSERT INTO `test` VALUES ('10007', '航空器机身一切险及责任险[免增值税]', 'TAG01', '08100');
INSERT INTO `test` VALUES ('10008', '航空责任险', 'TAH00', '08100');
INSERT INTO `test` VALUES ('10009', '航空责任险[免增值税]', 'TAH01', '08100');
INSERT INTO `test` VALUES ('11002', '雇员忠诚保证保险', 'BAB00', '21223');
INSERT INTO `test` VALUES ('11006', '个人汽车消费贷款保证保险', 'BAE01', '21112');
INSERT INTO `test` VALUES ('11007', '个人按揭贷款还款保证保险', 'BAF00', '21113');
INSERT INTO `test` VALUES ('33001', '沿海、内河船舶保险', 'SCA00', '05000');
INSERT INTO `test` VALUES ('33002', '远洋船舶保险', 'SCB00', '05000');
INSERT INTO `test` VALUES ('33003', '船舶建造保险', 'SCC00', '05000');
INSERT INTO `test` VALUES ('33004', '内河船舶保险', 'SCD00', '05000');
INSERT INTO `test` VALUES ('33005', '沿海、内河船舶保险[免增值税]', 'SCA02', '05000');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id主键',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名/昵称',
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '账户',
  `Personal_profile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '简介',
  `sex` enum('男','女') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '性别',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '1912504939@qq.com', 'LxgyjDX8S7ZRPcDIwM0kfw==', 'dengruo', '18932474043', '前端码农一枚', '男', '2021-03-23 17:43:41');
INSERT INTO `user` VALUES (2, '18932474043@qq.com', 'LxgyjDX8S7ZRPcDIwM0kfw==', 'dengruo', '18932474043', '前端开发工程师', '男', '2021-03-22 15:32:53');
INSERT INTO `user` VALUES (3, 'admin', 'LxgyjDX8S7ZRPcDIwM0kfw==', 'dengruo', '1912504939@qq.com', '前端开发工程师', '男', '2021-04-07 16:23:00');
COMMIT;

-- ----------------------------
-- Table structure for 机构
-- ----------------------------
DROP TABLE IF EXISTS `机构`;
CREATE TABLE `机构` (
  `level` varchar(255) DEFAULT NULL,
  `companyCode` varchar(255) DEFAULT NULL,
  `corpCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `busSreName` varchar(255) DEFAULT NULL,
  `creditCode` varchar(255) DEFAULT NULL,
  `supPrefCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `companyLevel` varchar(255) DEFAULT NULL,
  `superior` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `areaCode` varchar(255) DEFAULT NULL,
  `areaName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`corpCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of 机构
-- ----------------------------
BEGIN;
INSERT INTO `机构` VALUES ('一级', '000023', '00000000', '史带财产保险股份有限公司', '91310000132235899W', '310000', '中国（上海）自由贸易试验区福山路500号25层05单元', '产险', '总公司', '史带', '营业', '310000', '上海');
INSERT INTO `机构` VALUES ('二级', '000023310000', 'AA000000', '史带财产保险股份有限公司上海分公司', '91310000660700088F', '310000', '中国(上海)自由贸易试验区浦电路577号3层308、309单元', '产险', '分公司', '史带财产保险股份有限公司', '营业', '310000', '上海');
INSERT INTO `机构` VALUES ('二级', '000023310000', 'AABA0000', '史带财产保险股份有限公司上海自贸试验区分公司', '913100000879311306', '310000', '中国（上海）自由贸易试验区福山路500号25层05单元', '产险', '分公司', '史带财产保险股份有限公司', '营业', '310000', '上海');
INSERT INTO `机构` VALUES ('二级', '000023320000', 'AB000000', '史带财产保险股份有限公司江苏分公司', '913200008347945803', '320000', '南京市建邺区庐山路188号712室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '320000', '江苏');
INSERT INTO `机构` VALUES ('二级', '000023320000', 'ABAB0000', '史带财产保险股份有限公司苏州分公司', '91320594728012952Q', '320000', '苏州工业园区苏州大道西205号尼盛广场1107室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '320000', '江苏');
INSERT INTO `机构` VALUES ('二级', '000023330000', 'AC000000', '史带财产保险股份有限公司浙江分公司', '91330000729116008X', '330000', '浙江省杭州市下城区环城北路208号坤和中心1004室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '330000', '浙江');
INSERT INTO `机构` VALUES ('二级', '000023330200', 'AD000000', '史带财产保险股份有限公司宁波分公司', '91330204720423183J', '330200', '宁波市鄞州区河清北路369号（新府银座）603室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '330000', '浙江');
INSERT INTO `机构` VALUES ('二级', '000023340000', 'AF000000', '史带财产保险股份有限公司安徽分公司', '913400007389489140', '340000', '安徽省合肥市包河区宁国路129号金保中心2308室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '340000', '安徽');
INSERT INTO `机构` VALUES ('二级', '000023350000', 'AG000000', '史带财产保险股份有限公司福建分公司', '91110101055611036F', '350000', '福建省福州市鼓楼区古田路60号福晟财富中心12层1202单元', '产险', '分公司', '史带财产保险股份有限公司', '营业', '350000', '福建');
INSERT INTO `机构` VALUES ('二级', '000023370200', 'AH000000', '史带财产保险股份有限公司青岛分公司', '913702007569310167', '370200', '山东省青岛市市南区香港中路9号香格里拉中心2501', '产险', '分公司', '史带财产保险股份有限公司', '营业', '370000', '山东');
INSERT INTO `机构` VALUES ('二级', '000023110000', 'AL000000', '史带财产保险股份有限公司北京分公司', '91110101055611036F', '110000', '北京市朝阳区永安东里16号16层07单元、17层09、10单元', '产险', '分公司', '史带财产保险股份有限公司', '营业', '110000', '北京');
INSERT INTO `机构` VALUES ('二级', '000023440000', 'AM000000', '史带财产保险股份有限公司广东分公司', '91440101MA59BQ6F6J', '440000', '广州市越秀区沿江西路181号1101室', '产险', '分公司', '史带财产保险股份有限公司', '营业', '440000', '广东');
INSERT INTO `机构` VALUES ('二级', '000023500000', 'AP000000', '史带财产保险股份有限公司重庆分公司', '91500103MA5U7MXA3K ', '500000', '重庆市渝中区民族路188号环球金融中心20层5-2', '产险', '分公司', '史带财产保险股份有限公司', '营业', '500000', '重庆');
INSERT INTO `机构` VALUES ('二级', '000023420000', 'AQ000000', '史带财产保险股份有限公司湖北分公司', '91420000MA49148N8B', '420000', '湖北省武汉市武昌区公正路216号安顺月光广场16栋第11层C1区', '产险', '分公司', '史带财产保险股份有限公司', '营业', '420000', '湖北');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
