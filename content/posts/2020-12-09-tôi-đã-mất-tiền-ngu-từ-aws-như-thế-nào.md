---
template: post
title: Tôi đã mất tiền ngu từ AWS như thế nào?
slug: aws-mat-tien-ngu
socialImage: /media/aws-price.png
draft: false
date: 2020-12-09T15:56:41.830Z
description: Vài dòng về việc mất tiền ngu AWS.
category: aws
tags:
  - aws
  - charge
  - lost money
allowComment: false
---
Chuyện bắt đầu vào chừng đầu tháng 5 vừa rồi. Mình có đăng ký trải nghiệm AWS free tier để trải nghiệm và học hỏi thêm về các service mà Amazone cung cấp, hầu hết dịch vụ mình dùng chủ yêu xoay quanh S3 và Cloudfront. Và nếu nhưng chuyện dừng ở đó thì tốt biết mấy. Vừa hay tháng trước có kèo setup một trang Wordpress, theo như những kiến thức hạn hẹp mà mình biết lúc trước thì để setup một trang Wordpress thì cần một computer instance và một database để lưu trữ (rds). \
\
Chả hiểu kiểu gì lúc chọn tạo rds thì chọn loại large và khi setup xong và không dùng nữa thì lại không đi xóa T_T. Và chuyện gì đến cũng phải đến, lần đầu tiên mình nhận được tin nhắn trừ tiên tài khoản thì không thành công (do tài khoản mình không để tiền) chủ quan là nó sẽ không sao hết. Đến ngày nhận lương qua tài khoản thì bên AWS recharge lại lần nữa và chả biết phải số trời không mà số tiền trongt tài khoản vừa vặn với số tiền cần charge 😌. Và thế là dù chỉ mới đầu tháng của mọi người nhưng đã là cuối tháng của bản thân 😓.

![ảnh mất tiền ngu](/media/screenshot_2020-12-10-00-21-44-36.png "aws charge sms")

Thì cũng đã xong rồi, coi như khoản trên là một phần học phí đóng một lần nhớ dài dài về AWS. Và để tránh không lặp lại tình trang bị charge thêm tháng sau nữa thì cần làm gì?

#### Đầu tiên terminate (dừng) tất cả các service hoặc service gây tốn tiền mà không cần thiết

Vào phần console -> [billing](https://console.aws.amazon.com/billing/) -> Bills ở đây sẽ tổng hợp tất cả dịch vụ charge tiền bạn, và bạn có thể chọn service để stop.

#### Đặt budget cho tài khoản

Budget của aws giúp chúng ta theo dõi được việc tiêu tiền và có thể cảnh báo (mail) khi đạt một mức nhất định.

![đặt budget](/media/console.aws.amazon.com_billing_home_.png "budget")



#### Close tài khoản

Để chắc ăn hơn mình quyết định close luôn tài khoản T_T. Có lẽ việc rời xa AWS một thời gian là cần thiết sau khoản charge ở trên.

![bye bye aws](/media/screen-shot-2020-12-09-at-22.56.26.png "bye")

Quanh đi nghĩ lại, cũng may là đầu tháng trả hết mọi chi tiêu xong. Rồi em (USD) cũng đã hạnh phúc với ai kia (Jeff Bezos) đành cẩn thận hơn trong lần tới vậy.