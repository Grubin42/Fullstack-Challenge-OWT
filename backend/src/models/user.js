module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Ce nom est déjà pris.'
            },
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}