package com.az.dlxj.system.dao;

import com.az.dlxj.common.dao.BaseDao;
import com.az.dlxj.system.domain.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Author : az
 * @Create : 2018-12-05 16:39
 * @Desc :
 */
@Mapper
public interface UserDao extends BaseDao<User> {

    // 登录
    public User getUserByUserName(String userName);

}
