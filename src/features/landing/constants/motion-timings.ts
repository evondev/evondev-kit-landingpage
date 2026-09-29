/** Nhịp của các animation trên landing, gom một chỗ để chỉnh cho đồng bộ. */
export const motionTimings = {
  /** Mỗi ký tự khi hộp đề mẫu tự gõ */
  typeCharacterMs: 28,
  /** Giữ câu đề đã gõ xong trước khi sang chế độ kế */
  typeHoldMs: 2600,
  /** Mỗi nhịp đổi ký tự khi chữ nhảy */
  scrambleStepMs: 40,
  /** Số nhịp nhảy thêm trước khi ký tự đầu tiên đứng yên */
  scrambleLeadSteps: 6,
  /** Thời gian số đếm lên */
  countUpMs: 1200,
  /** Khung hình tối đa mỗi giây cho canvas ASCII */
  asciiFramesPerSecond: 14,
};
