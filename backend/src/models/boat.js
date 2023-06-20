module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Boat', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
            }
        },
        picture: {
            type: DataTypes.TEXT,//a voir si on enregistre les binaire en bdd ou juste le path des imgs
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Ce champ ne peut pas être vide' },
                notNull: { msg: 'Champ obligatoire' },
                isURL: {
                    args: {
                      protocols: ['http', 'https'], // Définit les protocoles autorisés
                      require_protocol: true, // Exige un protocole dans l'URL
                    },
                    msg: 'URL invalide',
                },
            }
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}