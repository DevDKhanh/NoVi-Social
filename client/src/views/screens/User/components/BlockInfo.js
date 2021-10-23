import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { IoHomeSharp, IoLocationSharp } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';

import BoxBlock from '../../../components/Layout/BoxBlock';

function BlockInfo() {
	return (
		<BoxBlock>
			<div className="user-info">
				<div className="title">Giới thiệu</div>
				<div className="user-info__list">
					<div className="item">
						<div className="icon">
							<FaBookReader />
						</div>
						<div className="text">
							Học tại{' '}
							<span className="data">
								Khoa Công nghệ thông tin - Học viện Nông nghiệp
								Việt Nam
							</span>
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<IoHomeSharp />
						</div>
						<div className="text">
							Sống tại <span className="data">Hà Nội</span>
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<IoLocationSharp />
						</div>
						<div className="text">
							Đến từ <span className="data">Bắc Giang</span>
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<IoIosHeart />
						</div>
						<div className="text">Độc thân</div>
					</div>
					<div className="item">
						<div className="icon">
							<AiFillClockCircle />
						</div>
						<div className="text">
							Tham gia vào Tháng 9 năm 2014
						</div>
					</div>
				</div>
				<div className="user-info__control">
					<button className="btn btn--gray-color-2">
						Chỉnh sửa chi tiết
					</button>
					<button className="btn btn--gray-color-2">
						Thêm sở thích
					</button>
					<button className="btn btn--gray-color-2">
						Thêm nội dung đáng chú ý
					</button>
				</div>
			</div>
		</BoxBlock>
	);
}

export default BlockInfo;
