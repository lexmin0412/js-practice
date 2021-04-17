/**
 * 目标 负责管理所有观察者
 * @initialState 初始状态值
 */
class Subject {
	constructor(initialState) {
		this.state = initialState
		this.observers = []
	}

	/**
	 * 添加观察者
	 * @param {*} observer
	 */
	addObserver(observer) {
		this.observers.push(observer)
		return observer  // 这里返回observer是为了用于移除
	}

	/**
	 * 移除观察者
	 */
	removeObserver(observer)  {
		this.observers = this.observers.filter(item=>item!==observer)
	}

	/**
	 * 获取state
	 * @returns Object
	 */
	getState() {
		return this.state
	}

	/**
	 * 设置state
	 * @param {*} newState
	 */
	setState(newState) {
		this.state = newState
		this.emit()
	}

	/**
	 * 通知所有观察者数据有更新
	 */
	emit() {
		this.observers.forEach(observer=>{
			observer.update()
		})
	}
}

/**
 * 创建观察者
 * @param {*} update 更新回调
 * @returns
 */
const createObserver = (subject, update) => {
	const observer = {
		update: () => update(subject)
	}
	// 添加观察者
	subject.addObserver(observer)
	return observer
}
