/*
Navicat MySQL Data Transfer

Source Server         : wk
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : juanpi

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-18 10:31:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `sale` varchar(100) NOT NULL,
  `hd` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', 'https://goods5.juancdn.com/bao/180514/8/c/5af90b39b6f8ea2034319bc0_680x280.jpg?iopcmd=convert&Q=88&dst=jpg', '2.3折', '进入活动');
INSERT INTO `brand` VALUES ('2', 'https://goods3.juancdn.com/bao/180511/4/a/5af4f905b6f8ea6ff95d7d4d_680x280.jpg?iopcmd=convert&Q=88&dst=jpg', '2.4折', '进入活动');
INSERT INTO `brand` VALUES ('3', 'https://goods2.juancdn.com/bao/180511/2/7/5af4f930b6f8ea6e705cb05b_680x280.jpg?iopcmd=convert&Q=88&dst=jpg', '低至3折', '进入活动');
INSERT INTO `brand` VALUES ('4', 'https://goods7.juancdn.com/bao/180514/c/0/5af90b0533b0891546302454_680x280.jpg?iopcmd=convert&Q=88&dst=jpg', '1.4折起', '进入活动');

-- ----------------------------
-- Table structure for `datails`
-- ----------------------------
DROP TABLE IF EXISTS `datails`;
CREATE TABLE `datails` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` varchar(100) NOT NULL,
  `oldprice` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datails
-- ----------------------------
INSERT INTO `datails` VALUES ('1', 'http://s2.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg', '百草味夏威夷果200g坚果零食干果仁 奶油味送开口器批发', '33.9', '35.9');

-- ----------------------------
-- Table structure for `fangdajing`
-- ----------------------------
DROP TABLE IF EXISTS `fangdajing`;
CREATE TABLE `fangdajing` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fangdajing
-- ----------------------------
INSERT INTO `fangdajing` VALUES ('1', 'http://s2.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fangdajing` VALUES ('2', 'http://s2.juancdn.com/goods/180418/9/1/5ad6a97ea9fcf8aee969c59c_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fangdajing` VALUES ('3', 'http://s2.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fangdajing` VALUES ('4', 'http://s2.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg');

-- ----------------------------
-- Table structure for `fdj`
-- ----------------------------
DROP TABLE IF EXISTS `fdj`;
CREATE TABLE `fdj` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fdj
-- ----------------------------
INSERT INTO `fdj` VALUES ('1', 'https://goods3.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=11&height=58&width=58%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fdj` VALUES ('2', 'https://goods5.juancdn.com/goods/180418/9/1/5ad6a97ea9fcf8aee969c59c_800x800.jpg?iopcmd=thumbnail&type=11&height=58&width=58%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fdj` VALUES ('3', 'https://goods3.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=11&height=58&width=58%7Ciopcmd=convert&Q=88&dst=jpg');
INSERT INTO `fdj` VALUES ('4', 'https://goods3.juancdn.com/goods/180418/4/a/5ad6a95f8150a148bc6d34bb_800x800.jpg?iopcmd=thumbnail&type=11&height=58&width=58%7Ciopcmd=convert&Q=88&dst=jpg');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `price` varchar(40) NOT NULL,
  `oldprice` varchar(40) NOT NULL,
  `title` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'https://goods2.juancdn.com/goods/180507/3/b/5af001fe33b0895bdb283409_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥29', '￥129', '牛仔半身A字短裙包臀', '上新');
INSERT INTO `goods` VALUES ('2', 'https://goods8.juancdn.com/tao/170416/e/b/58f339b0a43d1f454f4cf578_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥29', '￥299', '鞋柜中口松糕底乐福鞋', '上新');
INSERT INTO `goods` VALUES ('3', 'https://goods6.juancdn.com/goods/180329/a/a/5abcab5da9fcf85be9128d4f_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥35', '￥159', '时尚韩版无袖碎花套装', '上新');
INSERT INTO `goods` VALUES ('4', 'https://goods4.juancdn.com/goods/180327/6/9/5ab9ef18a9fcf881886ec1a0_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥39', '￥359', '鞋柜圆头亮片休闲女鞋', '上新');
INSERT INTO `goods` VALUES ('5', 'https://goods7.juancdn.com/goods/180510/d/d/5af3afefb6f8ea0cef3b5003_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥45', '￥239', '女孩规则时尚阔腿裤', '上新');
INSERT INTO `goods` VALUES ('6', 'https://goods5.juancdn.com/goods/180118/8/6/5a60178a8150a16cf93c9fbb_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥49', '￥329', '百事女10款运动夹克', '上新');
INSERT INTO `goods` VALUES ('7', 'https://goods7.juancdn.com/goods/180510/c/a/5af3d213b6f8ea0e411169f5_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥45', '￥199', '女孩规则时尚连衣裙', '上新');
INSERT INTO `goods` VALUES ('8', 'https://goods6.juancdn.com/tao/180313/b/0/5aa7999ca9fcf886642aabdc_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥119', '￥399', '依思q时尚刺绣小方包', '上新');
INSERT INTO `goods` VALUES ('9', 'https://goods6.juancdn.com/goods/180404/a/9/5ac450018150a17a1b11e343_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥32.9', '￥299', '凯迈蕾童装卡通印花潮', '上新');
INSERT INTO `goods` VALUES ('10', 'https://goods7.juancdn.com/goods/170923/d/5/59c655d6a9fcf83bf82204a4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥69', '￥568', '男士时尚印花简约T恤', '上新');
INSERT INTO `goods` VALUES ('11', 'https://goods5.juancdn.com/goods/170915/8/2/59bbeb49a9fcf840705aa207_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥89', '￥568', '纯色休闲百搭POLO衫', '上新');
INSERT INTO `goods` VALUES ('12', 'https://goods1.juancdn.com/goods/171121/0/c/5a13dc16a9fcf88d232e0091_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥135', '￥160', '欧诗漫水活睡眠面膜', '上新');
INSERT INTO `goods` VALUES ('13', 'https://goods4.juancdn.com/goods/180417/6/6/5ad59127a9fcf805d54d2b1b_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥88', '￥399', '妈妈装夏季休闲T恤', '上新');
INSERT INTO `goods` VALUES ('14', 'https://goods5.juancdn.com/goods/180408/9/2/5ac9e9418150a1156562df71_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥25', '￥368', '夹趾水钻珠光女童凉鞋', '上新');
INSERT INTO `goods` VALUES ('15', 'https://goods8.juancdn.com/tao/170109/f/a/58733ddddb01d934568b4570_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥84.6', '￥288', '宫廷公主蚊帐三开门', '上新');
INSERT INTO `goods` VALUES ('16', 'https://goods1.juancdn.com/goods/180324/1/f/5ab5b07b8150a12d7864b852_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥17.9', '￥29', '雨旺手工烧饼350g/袋', '上新');
INSERT INTO `goods` VALUES ('17', 'https://goods4.juancdn.com/goods/170829/6/1/59a4d9118150a145910b44de_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥739', '￥1299', '华为畅享7 4G手机', '上新');
INSERT INTO `goods` VALUES ('18', 'https://goods3.juancdn.com/goods/180125/5/8/5a699076a9fcf8a376451796_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥11', '￥50', '金刚砂3个装', '剩14小时');
INSERT INTO `goods` VALUES ('19', 'https://goods4.juancdn.com/goods/180510/7/3/5af3b9bdb6f8ea0c7308b36d_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥39', '￥199', '女孩规则时尚外套', '上新');
INSERT INTO `goods` VALUES ('20', 'https://goods1.juancdn.com/goods/180329/0/e/5abc4780a9fcf89865399c0c_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥39', '￥369', '鞋柜平底一字扣凉鞋', '上新');
INSERT INTO `goods` VALUES ('21', 'https://goods6.juancdn.com/tao/180107/b/9/5a519ca68150a15c142c869b_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥35', '￥229', '荷叶袖显瘦时尚套装', '上新');
INSERT INTO `goods` VALUES ('22', 'https://goods7.juancdn.com/goods/180425/c/e/5ae0401833b089498868a1f2_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥49', '￥399', '百事男POLO衫', '上新');
INSERT INTO `goods` VALUES ('23', 'https://goods5.juancdn.com/goods/180510/9/8/5af3d853b6f8ea0bb2620d2b_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥45', '￥199', '女孩规则时尚连衣裙', '上新');
INSERT INTO `goods` VALUES ('24', 'https://goods7.juancdn.com/tao/180320/d/1/5ab0a708a9fcf8901b3eb734_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥109', '￥499', '依思q休闲双肩背包', '上新');
INSERT INTO `goods` VALUES ('25', 'https://goods1.juancdn.com/goods/180508/1/0/5af10a9cb6f8ea66226b7d10_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥42', '￥199', '圆领露肩高腰连衣裙', '上新');
INSERT INTO `goods` VALUES ('26', 'https://goods5.juancdn.com/tao/180107/9/9/5a51b39c8150a1767d4f3172_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥39', '￥229', '露脐系带时尚套装', '上新');
INSERT INTO `goods` VALUES ('27', 'https://goods4.juancdn.com/goods/180412/6/7/5acf0aa4a9fcf8afe9066cc2_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥69', '￥598', '夏季休闲百搭格子衬衫', '上新');
INSERT INTO `goods` VALUES ('28', 'https://goods1.juancdn.com/goods/171103/1/4/59fbfb21a9fcf8294a731614_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥28', '￥29', '欧诗漫美白洁面乳', '上新');
INSERT INTO `goods` VALUES ('29', 'https://goods1.juancdn.com/bao/170706/0/6/595df3eea9fcf8472012a134_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg', '￥19.8', '￥87', '香巴拉弯钩925银耳钉', '上新');
INSERT INTO `goods` VALUES ('30', 'https://goods4.juancdn.com/goods/180112/7/f/5a581892a9fcf889e0173725_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg', '￥19.9', '￥29', '罐装零食猫耳朵酥300g', '上新');

-- ----------------------------
-- Table structure for `lodingreg`
-- ----------------------------
DROP TABLE IF EXISTS `lodingreg`;
CREATE TABLE `lodingreg` (
  `sid` tinyint(1) NOT NULL AUTO_INCREMENT,
  `tel` varchar(100) NOT NULL,
  `pass` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lodingreg
-- ----------------------------
INSERT INTO `lodingreg` VALUES ('3', '18267905583', 'c5d5410e7f14ba184b44f51bf3aaa691');
INSERT INTO `lodingreg` VALUES ('4', '18267905584', 'c5d5410e7f14ba184b44f51bf3aaa691');

-- ----------------------------
-- Table structure for `lunbo`
-- ----------------------------
DROP TABLE IF EXISTS `lunbo`;
CREATE TABLE `lunbo` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lunbo
-- ----------------------------
INSERT INTO `lunbo` VALUES ('1', 'https://goods3.juancdn.com/bao/180511/4/e/5af552aab6f8ea34fe6475b7_700x360.png?iopcmd=convert&Q=88&dst=png');
INSERT INTO `lunbo` VALUES ('2', 'https://goods7.juancdn.com/bao/180511/d/d/5af4fcab33b0897ff34b4b56_700x360.jpg?iopcmd=convert&Q=88&dst=jpg');
INSERT INTO `lunbo` VALUES ('3', 'https://goods3.juancdn.com/bao/180510/4/a/5af3ee26b6f8ea0cae00a852_700x360.jpg?iopcmd=convert&Q=88&dst=jpg');
