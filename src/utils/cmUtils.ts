class cmUtils {
  /**
   * ***********************************************************************************************
   * ******** 값이 비어있는지 확인 ********************************************************************
   * ***********************************************************************************************
   */

  /**
   * 1. 값이 없는지 확인하는 함수
   * @param value: unknown
   * @returns {boolean}
   */
  static isEmpty(value: unknown): boolean {
    if (
      value === '' ||
      value === null ||
      value === 'null' ||
      value === undefined
    ) {
      return true;
    }

    if (Array.isArray(value) && value.length === 0) {
      return true;
    }

    if (typeof value === 'object') {
      if (value instanceof Date) {
        return !value.getTime() || value.getTime() === 0; // 1970-01-01
      }

      return Object.keys(value).length === 0;
    }

    return false;
  }

  /**
   * 2. 값이 있는지 확인하는 함수
   * @param value: unknown
   * @returns {boolean}
   */ static isNotEmpty(value: unknown): boolean {
    return !this.isEmpty(value);
  }
}

export default cmUtils;
